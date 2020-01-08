$(document).ready(function(){
    $(document).on('click', '#logout', function(){
        location.href = 'login.html';
    });
    // app html
    var app_html=`
        <div class='container'>
 
            <div class='page-header'>
                <h1 id='page-title' class='text-align-center' >User List</h1>
            </div>
 
            <!-- this is where the contents will be shown. -->
            <div id='page-content'></div>
 
        </div>`;
 
    // inject to 'app' in index.html
    $("#app").html(app_html);
 
});
// function to make form values to json format
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};