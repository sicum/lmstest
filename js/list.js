$(document).ready(function(){
 
    // show list of users on first load
    // showUsers();
    // show list of users on first load
    showUsersFirstPage();
    
    // when a 'page' button was clicked
    $(document).on('click', '.pagination li', function(){
        // get json url
        var json_url=$(this).find('a').attr('data-page');
    
        // show list of users
        showUsers(json_url);
    });
 
});
function showUsersFirstPage(){
    var json_url="http://localhost:8888/LMS/api/users/read_paging.php";
    showUsers(json_url);
}
 
// Mostrar lista de usuarios
function showUsers(json_url){
 // get list of users from the API
 $.getJSON(json_url, function(data){
    // html for listing users
    var read_users_html=`
    <!-- start table -->
    <table class='table table-striped'>
    
        <!-- creating our table heading -->
        <tr>
            <th class='w-10-pct' style="background-color: #E98C3B; border-color: #E98C3B" ></th>
            <th class='w-100-pct' style="background-color: #E98C3B; border-color: #E98C3B"></th>
            <th class='w-100-pct text-align-center'style="background-color: #E98C3B; border-color: #E98C3B"></th>
        </tr>`;
     
    // loop through returned list of data
    $.each(data.records, function(key, val) {
        var pass = val.password;
        // creating new table row per record
        read_users_html+=`
            <tr> 
                <td>
                    <svg class="bi bi-check-circle text-success" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    ...
                    </svg>
                </td>
                <td><div>` + val.username +`</div><div>` + val.firstname + ` ` + val.lastname + `</div></td>
                <td>` + pass + `</td>
            </tr>`;
    });
 
// end table
read_users_html+=`</table>`;
// pagination
if(data.paging){
    read_users_html+="<ul class='pagination pull-center margin-zero padding-bottom-2em'>";
 
        // first page
        if(data.paging.first!=""){
            read_users_html+="<li><a data-page='" + data.paging.first + "'>First Page</a></li>";
        }

        $.each(data.paging.pages, function(key, val){
            var active_page=val.current_page=="yes" ? "class='active'" : "";
            read_users_html+="<li " + active_page + "><a data-page='" + val.url + "'>" + val.page + "</a></li>";
        });
 
        // last page
        if(data.paging.last!=""){
            read_users_html+="<li><a data-page='" + data.paging.last + "'>Last Page</a></li>";
        }
    read_users_html+="</ul>";
}
// inject to 'page-content' of our app
$("#page-content").html(read_users_html);
});
}

