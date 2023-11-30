
function generateAudioText(audioText) {
    var lines = audioText.split('\n');
    var text = '';
    // Iterate through the lines and create a new span for each line
    for (var line of lines) {
        var text = text + '<span>' + line + '</span> <br>';
    }
    return text;
}

// Get a reference to the download link
var renderDownloadLink = document.getElementById('render-download-link-id');
//var renderDownloadButton = document.getElementById('render-download-button-id');

// Add an event listener to the link to trigger the download
renderDownloadLink.addEventListener('click', function() {
    
    // var title = document.getElementById('title-id').value;
    var title = 'animated illustration'
    var header1 = document.getElementById('header-1-id').value;
    var header2 = document.getElementById('header-2-id').value;
    var topic = document.getElementById('topic-id').value;
    var illustration = document.getElementById('illustration-id').value;
    
    var slider1ValuesStr = '[' + document.getElementById('slider-1-values-id').value + ']';
    var slider2ValuesStr = '[' + document.getElementById('slider-2-values-id').value + ']';
    var slider1ValuesObj = JSON.parse(slider1ValuesStr);
    var slider2ValuesObj = JSON.parse(slider2ValuesStr);
    
    var slider1InitialIndexStr = '[' + document.getElementById('slider-1-initial-index-id').value + ']';
    var slider2InitialIndexStr = '[' + document.getElementById('slider-2-initial-index-id').value + ']';
    var slider1InitialIndexObj = JSON.parse(slider1InitialIndexStr);
    var slider2InitialIndexObj = JSON.parse(slider2InitialIndexStr);
    
    var slider1Header = document.getElementById('slider-1-header-id').value;
    var slider2Header = document.getElementById('slider-2-header-id').value;
    var button1Header = document.getElementById('slider-1-button-header-id').value;
    var button2Header = document.getElementById('slider-2-button-header-id').value;
    
    var slider1ParamterStr = document.getElementById('slider-1-parameter-id').value;
    var slider2ParamterStr = document.getElementById('slider-2-parameter-id').value;
    
    var figure1Header = document.getElementById('figure-1-header-id').value;
    
    var figure1Explanation = document.getElementById('figure-1-explanation-id').value;
    
    var audioTextFigure1Overall = generateAudioText( document.getElementById('audio-text-figure-1-overall-id').value );
    var audioTextFigure1Slider1 = generateAudioText( document.getElementById('audio-text-figure-1-slider-1-id').value );
    var audioTextFigure1Slider2 = generateAudioText( document.getElementById('audio-text-figure-1-slider-2-id').value );
    
    htmlFile = `
        <!doctype html>
        <html lang="eng">
        <head>
        
        <title>
            
            ${title}
            
        <\/title>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="stylesheet" href="https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.7\/css\/bootstrap.min.css">
        <link rel="stylesheet" href="https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/bootstrap-slider\/10.0.0\/css\/bootstrap-slider.min.css">
        
        <!-- my style sheet -->
        <link rel="stylesheet" href="..\/assets\/mystyle.css">
        
        <!-- logo -->
        <div class="logo-cl header-01-cl" style="text-align:center; padding-top: 20px; padding-bottom: 20px;" background-color="#eeeeee;">
            <img src="..\/assets\/RZ_UniHohenheim_Logo_1C_Weiss_EN.svg" height="250px"\/>
        <\/div>
        
        <\/head>
        <body>
        
        <div class="container mt-5">
            <div class="row">
            
            <div class="jumbotron top-jumb-cl" style="margin-top: 50px; padding: 25px 50px 25px 50px;">
                
                <div style='font-size: 28pt; margin-bottom: 0px;'>

                ${header1}

                <\/div>
                <div style='font-size: 18pt;'>

                ${header2}

                <\/div> 
                
            <\/div>
            
            <\/div>
        <\/div>
        
        <div class="container mt-5">
            <div class="row">
            
            <div class="jumbotron" style="padding: 25px 50px 25px 50px">
                
                <p style="font-size: 18pt">Topic of the module<\/p>
                
                <div style="margin-left: 10pt;">
                
                <p>

                    ${topic}

                <\/p>
                    
                <\/div>
                
                <\/div>
                
            <\/div>
            <\/div>
            
            <div class="container mt-5">
            <div class="row">
                
                <div class="jumbotron outer-jumb-cl" style="padding: 25px 50px 25px 50px">
                
                <p style="font-size: 18pt">Illustration<\/p>
                
                <div style="margin-left: 10pt;">
                    
                    <p>

                    ${illustration}

                    <\/p>
                                
                <\/div>
                
                <div class="container mt-5" style="margin-top: 50px;">
                    <div class="row">
                    
                    <div class="col-sm-3" style="margin-top: 90px;">
                        <div class="jumbotron inner-jumb-cl" style="padding: 25px 50px 25px 50px">
                        
                        <p style="font-size: 14pt; text-align: center;">Parameters<\/p>
                        
                        <div style='margin-top: 50px;'>
                            
                            <hr>
                            <p style='font-size: 12pt; text-align: center;'>${slider1Header}<\/p>
                            <p style='font-size: 12pt; text-align: center' class='slider-value-cl' id='slider-value-1-id'><\/p>
                            <input class='slider-cl' id='slider-1-id' type='text' data-slider-min='0' data-slider-max='${slider1ValuesObj.length-1}' data-slider-step='1' data-slider-value='${slider1InitialIndexObj[0]}'\/>
                            <div style='font-size: 12pt; text-align: center;'>
                            <button class='animate-button-cl' id='animate-button-1-id' onclick='animateButtonClick(slider = 1)'>${button1Header}<\/button>
                            <\/div>
                            <br>
                            <p style='font-size: 12pt; text-align: center;'>${slider2Header}<\/p>
                            <p style='font-size: 12pt; text-align: center' class='slider-value-cl' id='slider-value-2-id'><\/p>
                            <input class='slider-cl' id='slider-2-id' type='text' data-slider-min='0' data-slider-max='${slider2ValuesObj.length-1}' data-slider-step='1' data-slider-value='${slider2InitialIndexObj[0]}'\/>
                            <div style='font-size: 12pt; text-align: center;'>
                            <button class='animate-button-cl' id='animate-button-2-id' onclick='animateButtonClick(slider = 2)'>${button2Header}<\/button>
                            <\/div>
                            
                        <\/div>
                        
                        <\/div>
                    <\/div>
                    
                    <div class="col-sm-9">
                        <div class="jumbotron inner-jumb-cl" style="padding: 15px 50px 25px 50px">
                        
                        <br>
                        
                        <div id="tab-content-l1-n1-id" class="tab-content-l1-cl">
                            <table style="width:100%; margin-bottom: 10px;">
                            <tr>
                                <td style="width: 10%"><\/td>
                                <td style="width: 80%; font-size: 14pt; text-align: left;">
                                ${figure1Header}
                                <\/td>
                                <td style="width: 10%; font-size: 14pt; text-align: right;">
                                <button class="explain-button-cl" onclick="explainButtonClick()">Explain<\/button>
                                <\/td>
                            <\/tr>
                            <\/table>
                            <div style="text-align: center;">
                            <img src=".\/figures\/figure_01.svg" alt="" class="figure-cl" id="figure-1-id" style="max-width: 75%;">
                            <\/div>                                        
                            <p class="audio-show-text-cl" id="audio-show-text-figure-1-id" style="font-size: 10pt; color: red; font-style: italic; text-align: center; display: none;"><\/p>
                            ${figure1Explanation}
                        <\/div>
                        
                        <\/div>
                        
                    <\/div>
                    <\/div>
                <\/div>
                
                <\/div>
                
            <\/div>
            <\/div>
            
            <!-- .................................................. -->
            <!-- Collections of audio text -->
            <div style="display: none;">
                        
            <div id="audio-text-figure-1-overall-id" class="audio-text-cl">
                
                ${audioTextFigure1Overall}
                
            <\/div>
            
            <div id="audio-text-figure-1-slider-1-id" class="audio-text-cl">          
                
                ${audioTextFigure1Slider1}
                
            <\/div>
            
            <div id="audio-text-figure-1-slider-2-id" class="audio-text-cl">          
                
                ${audioTextFigure1Slider2}
                
            <\/div>      
            
            <\/div>
                
            <!-- footer logos -->
            <div class="container mt-5">
            <div class="row">
                
                <hr>
                <table style="width:100%">
                <tr>
                    <td style="width: 25%; text-align: left; padding-left: 10%;">
                    <img src="..\/assets\/RZ_UniHohenheim_Logo_4C_E_blau_EN.svg" height="10%"\/>
                    <\/td>
                    <td style="width: 50%; text-align: center;">
                    <p style="font-size: 75%; text-align: center;">This module is part of the <a href="https:\/\/www.uni-hohenheim.de\/en\/project-dellfi">DeLLFi<\/a> project of the University of Hohenheim and funded by the <br> <a href="https:\/\/stiftung-hochschullehre.de\/">Foundation for Innovation in University Teaching<\/a><\/p>
                    <a rel="license" href="http:\/\/creativecommons.org\/licenses\/by-nc-sa\/4.0\/">
                        <img alt="Creative Commons License" style="border-width:0; padding-top: -20px;" src="https:\/\/i.creativecommons.org\/l\/by-nc-sa\/4.0\/88x31.png" height="10%"\/>
                    <\/a> 
                    <\/td>
                    <td style="width: 25%; text-align: right; padding-right: 10%;">
                    <img src="..\/assets\/Logo_Stiftung_Hochschullehre.svg" height="10%"\/>
                    <\/td>
                <\/tr>
                <\/table>
                <hr>      
                
            <\/div>
            <\/div>
            
            <!-- include mathjax js via cdn -->
            <script
            src="https:\/\/cdn.jsdelivr.net\/npm\/mathjax@3\/es5\/tex-chtml.js">
        <\/script>
        
        <!-- include bootstrap slider js via cdn --> 
        <script 
        src="https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/bootstrap-slider\/10.0.0\/bootstrap-slider.min.js">
        <\/script>

        <!-- include jstat js via cdn -->
        <script
        src="https:\/\/cdn.jsdelivr.net\/npm\/jstat@latest\/dist\/jstat.min.js">
        <\/script>

        <!-- adjust inputs -->
        <div id="script-old">
        <script>  
        
        var sliders = {
            'value': {
            'slider1': [${document.getElementById('slider-1-values-id').value}],
            'slider2': [${document.getElementById('slider-2-values-id').value}],
            },
            'initialIndex': [${document.getElementById('slider-1-initial-index-id').value}, ${document.getElementById('slider-2-initial-index-id').value}],
            'sliderValueParStr': ['${slider1ParamterStr}', '${slider2ParamterStr}'],

        }
        var figures = {
            'tab_name': [],
            'tab_header': [],
        }
        
        <\/script>
        <\/div>

        <div id="script-input"><\/div>

        <!-- include js for interaction and animation -->
        <script src="..\/assets\/interactionAndAnimationScript.js"><\/script>

        <!-- include my javascript -->
        <script src="..\/assets\/myScript.js"><\/script>
        
        <\/body>
        <\/html>
        `

    // Create a Blob with the file content (here, a html file)
    var fileContent = htmlFile;
    var blob = new Blob([fileContent], { type: 'text/plain' });

    // Set the link's href to the Blob URL
    renderDownloadLink.href = window.URL.createObjectURL(blob);

});