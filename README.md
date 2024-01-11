# interactive-illustration-tool

This repository contains a template to create an *interactive illustration tool*

# Instructions

Instructions for creating an *interactive illustration tool* using some prepared templates can be found here,

```

https://raw.githack.com/mmoessler/interactive-illustration-tool/main/index.html

```

Note, step 4 is only relevant for the integration into [*ILIAS*](https://www.ilias.de/).

## Examples

Examples based on the template look like this,

```

https://raw.githack.com/mmoessler/interactive-illustration-tool/main/example-01/html_template_xx.html

https://raw.githack.com/mmoessler/interactive-illustration-tool/main/example-02/html_template_xx.html

https://raw.githack.com/mmoessler/interactive-illustration-tool/main/example-03/html_template_xx.html

```

## Steps

1) Download and unzip or clone this repository.
2) Move into the subdirectory `./template-01`.
3) Generate and store your figures for the illustration in the subdirectory `./template-01/figures`. See explanation of the *figure naming convention* below.
4) Customize the content of the `./template-01/input_chunks.txt` file. See the explanation of the *input chunks* below.
5) Execute the python script `./assets/merge_script_py` to generate the final `./template-01/html_template_xx.html` file with the interactive animated illustration.
6) Feel free to change the name of the folder, i.e., `./template-01`, and of the final html file, i.e., `./template-01/html_template_xx.html`. 

## Explanations

## Figure naming convention

1) Choose the number of figures you want to use for your illustration. Use the following naming convention for the number of figures `figure_01_`, `figure_02_`,... `figure_0X_` for `X` figures.
2) Choose the number of sliders or parameters you want to use for your illustration. For each slider add another index of the slider or parameter value separated by `_`, e.g., for two figures and two sliders use, `figure_01_x_y`, `figure_02_x_y` where `x` and `y` are the index of the slider or parameter value. 
3) Choose the number of slider values or parameter values of each slider or parameter. For example for two figure and two sliders where the first slider has three values and the second slider has four values you should have the following figures.
  * `figure_01_1_1`, `figure_01_2_1`, `figure_01_3_1`, `figure_01_1_2`; `figure_01_2_2`, `figure_01_3_2`, `figure_01_1_3`, `figure_01_2_3`, `figure_01_3_3`, `figure_01_1_4`, `figure_01_2_4`, `figure_01_3_4`
  * `figure_02_1_1`, `figure_02_2_1`, `figure_02_3_1`, `figure_02_1_2`; `figure_02_2_2`, `figure_02_3_2`, `figure_02_1_3`, `figure_02_2_3`, `figure_02_3_3`, `figure_02_1_4`, `figure_02_2_4`, `figure_02_3_4`
  
## Input chunks

### *html code chunks*

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

<!-- Add your *slider* and *figure* specification. -->

The information are collected in the following two dictionaries:

 - `sliders`: Dictionary containing the specification of the sliders
 - `figures`: Dictionary containing the specification of the figures
 
Customize the *values* of the following *keys* of the `sliders` dictionary:

- `value`: Nested dictionary with the array of values displayed for each slider
  - `slider1`: Array of values displayed for slider 1
  - ...
  - `sliderX`: Array of values displayed for slider X
- `initialIndex`: Array with length equal to the number of sliders containing the initial position/index for the slider. Note, index starts with 0!
- `sliderValueParStr`: Array with length equal to the number of sliders containing the character strings displayed for each slider value
- `slider_header`: Array with length equal to the number of sliders containing the character strings displayed for each slider
- `button_header`: Array with length equal to the number of sliders containing the character strings displayed on the animate button for each slider
- `slider_value_max`: Array with length equal to the number of sliders containing the maximum position/index for each slider. Note, index starts with 0! 
- `slider_value`: Array with length equal to the number of sliders containing the initial position/index for the slider. Note, index starts with 0!

Customize the *values* of the following *keys* of the `figures` dictionary:

- `tab_name`: Array with length equal to the number of figures containing the character strings displayed on the tab button for each figure
- `tab_header`: Array with length equal to the number of figures containing the character strings displayed as header for each figure

### *html code chunks*

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

Customize the content in the *html code chunks* for the audio text:

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

Add your audio text separated using `<span></span>` tags such as

````
<html/audio-text-figure-01-slider-01>
    <span> Changing the parameter X results in Y ... </span>
    <span> Moreover, ...</span>
<audio-text-figure-01-slider-01/html>

````

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