$(document).ready(function () {

    $('.add-note').click(function (e) {
        var $noteContainer = $(this).parent().siblings('.note');
        var title = $(this).siblings('.title').text();
        var i = $noteContainer.find('.stikcy-note');
        var uniqueId = getNoteId();
        $noteContainer.append('<div title="click to edit this note" class="sticky-note" data-noteid="' + uniqueId + '" ><div class="noteContent">');
    });
    $('.save').click(function () {
        var content = $('.editor textarea').val();
        if (content.trim() != '') {
            saveNote($('.editor').attr('data-editing-id'), content);
            $('.editor-popup').hide();
        }
    });
    $('.delete').click(function () {
        deleteNote($('.editor').attr('data-editing-id'));
        $('.editor-popup').hide();
    });
    $('.close').click(function () {
        $('.editor-popup').hide();
    });
    $('.note').on('click', '.sticky-note', function () {
        openNoteEditor($(this).attr('data-noteid'));
    });

});
saveNote = function (noteId, content) {
    $('.sticky-note[data-noteid=' + noteId + '] .noteContent').text(content);

}
deleteNote = function (noteId) {
    $('.sticky-note[data-noteid=' + noteId + ']').remove();
};
openNoteEditor = function (noteId) {
    $('.editor').attr('data-editing-id', noteId);
    $('.editor textarea').val($('.sticky-note[data-noteId=' + noteId + '] .noteContent').text());
    $('.editor-popup').show();
};
getNoteId = function () {
    return 'stickynote' + Math.floor((Math.random() * 100000));
}