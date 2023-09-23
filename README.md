# interactive-animated-illustration-tool

## Introduction

This is a template to create an illustration tool such as,

```

https://raw.githack.com/mmoessler/interactive-animated-illustration-tool/main/example-01/html_template_xx.html

```

## Approach

We created an empty *html* template (`html_template_00.html`) you can use as starting point.

To adjust the template for your illustration you have to (1) add your sliders and figures handling and (2) your explanations and interpretations.

We created an *txt* file (`input_chunks.txt`) where you can add the properties of your sliders and figures and your explanations and interpretations.

## Structure input chunks

Customize the content in the chunks in the file `input_chunks.txt`.

Customize the content in the *python code chunk*

````

sliders = {
    "value": {
        "slider1": [5, 10, 25, 50, 100],
        "slider2": [0.2, 0.4, 0.6, 0.8],
    },
    "initialIndex": [2, 2],
    "sliderValueParStr": ['n', 'p'],
    "slider_header": ['Sample size \(n\)', 'Probability of <br> success \(p\)'],
    "button_header": ['Animate \(n\)', 'Animate \(p\)'],
    "slider_value_max": ['4', '3'],
    "slider_value": ['2', '2'],
}
figures = {
    "tab_name": ['<em>plot-01</em>', '<em>plot-02</em>', '<em>plot-03</em>'],
    "tab_header": ['<em>plot-01-header</em>', '<em>plot-02-header</em>', '<em>plot-03-header</em>'],
}

````

Add your *slider* and *figure* specification.

The information are collected in the following two dictionaries:

 - `sliders`: Dictionary containing the specifcation of the sliders
 - `figures`: Dictionary containing the specification of the figures
 
Customize the *values* of the following *keys* of the `sliders` dictionary:

- `value`: Nested dictionary with the array of values displayed for each slider
  - `slider1`: Array of values displayed for slider 1
  - ...
  - `sliderX`: Array of values displayed for slider X
- `initialIndex`: Array with length equal to the number of sliders containing the initial position/index for the slider. Note, index starts with 0!
- `sliderValueParStr`: Array with length equal to the number of sliders containing the character strings displayed for each slider value
- `slider_header`: Array with length equal to the number of sliders containing the character strings displayed for each slider
- `button_header`: Array with length equal to the number of sliders containing the character strings dispclayed on the animate button for each slider
- `slider_value_max`: Array with length equal to the number of sldiers containing the maximum position/index for each slider. Note, index starts with 0! 
- `slider_value`: Array with length equal to the number of sliders containing the initial position/index for the slider. Note, index starts with 0!

Customize the *values* of the following *keys* of the `figures` dictionary:

- `tab_name`: Array with length equal to the number of figures containing the character strings displayed on the tab button for each figure
- `tab_header`: Array with length equal to the number of figures containing the character strings displayed as header for each figure

Customize the content in the *html code chunks*:

- `<html/title> ... <title/html>`: Add a title
- `<html/header-01> ... <header-01/html>`: Add a level one header
- `<html/header-02> ... <header-02/html>`: Add a level two header
- `<html/topic-01> ... <topic-01/html>`: Add a description of the topic of the illustration
- `<html/illustration> ... <illustration/html>`: Add a description of the illustration
- `<html/tab-text-01> ... <tab-text-01/html>`: Add a description under figure one
- `<html/tab-text-02> ... <tab-text-02/html>`: Add a description under figure two
- `<html/tab-text-03> ... <tab-text-03/html>`: Add a description under figure three
- ...

Customize the content in the *html code chunks* for the audio text

- figure 1
  - `<html/audio-text-figure-01-overall> ... <audio-text-figure-01-overall/html>`: Add the audio text for the overall explanation of figure one
  - `<html/audio-text-figure-01-slider-01> ... <audio-text-figure-01-slider-01/html>`: Add the audio text for the explanation of the effect of changing the underlying parameter of slider one for figure one
  - `<html/audio-text-figure-01-slider-02> ... <audio-text-figure-01-slider-02/html>`: Add the audio text for the explanation of the effect of changing the underlying parameter of slider two for figure one
  - ...
  - `<html/audio-text-figure-01-slider-0X> ... <audio-text-figure-01-slider-0X/html>`: Add the audio text for the explanation of the effect of changing the underlying parameter of slider X for figure one
- figure 2
  - `<html/audio-text-figure-02-overall> ... <audio-text-figure-02-overall/html>`: Add the audio text for the overall explanation of figure two
  - `<html/audio-text-figure-02-slider-01> ... <audio-text-figure-02-slider-01/html>`: Add the audio text for the explanation of the effect of changing the underlying parameter of slider two for figure two
  - `<html/audio-text-figure-02-slider-02> ... <audio-text-figure-02-slider-02/html>`: Add the audio text for the explanation of the effect of changing the underlying parameter of slider two for figure two
  - ...
  - `<html/audio-text-figure-02-slider-0X> ... <audio-text-figure-02-slider-0X/html>`: Add the audio text for the explanation of the effect of changing the underlying parameter of slider X for figure two
- ...
- figure X
  - `<html/audio-text-figure-0X-overall> ... <audio-text-figure-0X-overall/html>`: Add the audio text for the overall explanation of figure X
  - `<html/audio-text-figure-0X-slider-01> ... <audio-text-figure-0X-slider-01/html>`: Add the audio text for the explanation of the effect of changing the underlying parameter of slider one for figure X
  - `<html/audio-text-figure-0X-slider-02> ... <audio-text-figure-0X-slider-02/html>`: Add the audio text for the explanation of the effect of changing the underlying parameter of slider two for figure X
  - ...
  - `<html/audio-text-figure-0X-slider-0X> ... <audio-text-figure-0X-slider-0X/html>`: Add the audio text for the explanation of the effect of changing the underlying parameter of slider X for figure X

Add your audio text seperated using `<span></span>` tags such as

````
<html/audio-text-figure-01-slider-01>
    <span> Changing the parameter X results in Y ... </span>
    <span> Moreover, ...</span>
<audio-text-figure-01-slider-01/html>

````

<!-- ## Content

### Working with the Template

1. Create a folder named "figures" with all the figures that you want to use
2. Open the input_chunks.txt file - Each Section starts with e.g., <py/NAME> and ends with e.g., <NAME/py>
3. Change the content in each section accordingly and save the input_chunks.txt file
4. Run the merge_script.py file. A html_output file is created.

#### Example: Adding an additional slider 

1. Under slider, add a new slider with labels and values in the following form: "slider1": [1, 2, 3],
2. The "initialIndex" function sets the initial index position of the slider when they are first displayed. Note, that the first index value is counted from 0. If we want to display the value 2 as default, we would need to set the index value to 1.
3. Next, add the labels for the slider and the button, which are displayed in the final file
4. Now, enter the index of the last slider input value you defined previously in Step 1 under slider_value_max. 
5. Enter the index of the default value you want to display. 
6. Save the input_chunks.txt file and run the merge_script.py file.

Changing or adding Text Chunks or Audio text Chunks works similarly.

## Steps

... -->

## Licence

This project is part of the [DeLLFi](https://www.uni-hohenheim.de/en/project-dellfi) (Integrating digitalization along teaching, learning, and research) project of the University of Hohenheim and funded by [Foundation for Innovation in University Teaching](https://stiftung-hochschullehre.de/)

The materials may be used and further developed for teaching purposes with credit to the author and funding and under the terms of the license (see below).

<hr>

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
</a>

<br />

This work is licensed under a
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
</a>.