$(document).ready(function () {
    // Show/hide the ribbon based on mouse position and pin button state
    $('#main-content').on('mousemove', function (e) {
        var topEdge = $(this).offset().top; 
        var hoverThreshold = 10;
        var ribbonHeight = $('.ribbon').outerHeight(); 

        // Check if the pin button is showing the 'eye-off' icon
        if ($('#pin-button i').hasClass('ri-eye-off-line')) {
            // If mouse is near the top edge, show the ribbon and adjust panel heights
            if (e.pageY - topEdge <= hoverThreshold) {
                $('.ribbon').show(); 
                $('.file-section').css('max-height', 'calc(100vh - 17.5rem)'); 
                $('.right-panel-content').css('height', 'calc(100vh - 22.2rem)');
            } 
            // If mouse moves below the ribbon height, hide the ribbon and adjust panel heights
            else if (e.pageY > (topEdge + ribbonHeight)) {
                $('.ribbon').hide(); 
                $('.file-section').css('max-height', 'calc(100vh - 9.5rem)'); 
                $('.right-panel-content').css('height', 'calc(100vh - 14rem)'); 
            }
        }
    });

    // Handle the pin button click event
    $('#pin-button').click(function () {
        var ribbon = $('.ribbon'); 
        var icon = $('#pin-button i'); 
        var tooltip = $('#pin-button .tooltip'); 

        // If the 'eye-line' icon is active, hide the ribbon and set the appropriate heights
        if (icon.hasClass('ri-eye-line')) {
            ribbon.hide();
            icon.removeClass('ri-eye-line').addClass('ri-eye-off-line'); 
            $('.file-section').css('max-height', 'calc(100vh - 9.5rem)'); 
            $('.right-panel-content').css('height', 'calc(100vh - 14rem)'); 
            tooltip.text('View'); 
        } 
        // If the 'eye-off-line' icon is active, show the ribbon and reset the heights
        else if (icon.hasClass('ri-eye-off-line')) {
            ribbon.show(); 
            icon.removeClass('ri-eye-off-line').addClass('ri-eye-line'); 
            $('.file-section').css('max-height', 'calc(100vh - 17.5rem)');
            $('.right-panel-content').css('height', 'calc(100vh - 22.2rem)');
            tooltip.text('Hide'); 
        }
    });
});
