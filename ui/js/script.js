let editor;

//inside window.onload fn configure our editor
// to initialize thee ace editor
window.onload = function(){
    //arg is  the id of the div where we want to keep our editor
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
}
