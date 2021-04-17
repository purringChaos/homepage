---
title: A more personal about me page.
template: default.ejs
---

# A more personal about page.

<br>

## Genders

<br>

<?
genders = [
  {
    "name": "CringeWild",
    "description": "Where your gender is like, so many combined feelings, colours, aesthetics that it's just pure cringy excitement energy.",
    "alt": "A flag with cyan stripes on top and bottom, rainbow stars overlayed on the cyan stripes. Vertical blocks making rainbow gradients with sparkles inbetween the cyan stripes. A glittery strip inbetween them. A white stripe in the center. A Yellow, Cyan and Magenta circle overlapping eachover to mix to the colours Green, Blue, Red and Black.",
    "credit": "https://twitter.com/kagaminecore/status/1300156483716419586",
    "cw": "eyestrain"
  },
  {
    "name": "GNDgender",
    "description": "A gender where your gender is simply just connected to gender. No specific gender, it's just. Gender. the Gender is there, and you can feel it but you can't see or understand it. There is just a vague presence of the concept of gender Somewhere.",
    "alt": "A flag with the colours: light blue, pink, yellow and blueish purple.",
    "credit": "https://twitter.com/rabbitdeku/status/1299885784691093510"
  },
  {
    "name": "Chaotigender",
    "description": "Chaotigender is a neurogender exclusively for those with adhd who feel that their adhd directly influences their ability to properly analyze and pinpoint their gender.",
    "alt": "A flag with swirls and spheres in different colours placed in a very chaotic manner.",
    "credit": "https://transgalaxies.tumblr.com/post/168410185975/new-chaotigender-flag-art-credit-to-kyressin",
  },
  {
    "name": "Chaosgender",
    "description": "When your gender does lots of confusing things and doesn’t make sense to anyone.",
    "alt": "A flag that is very chaotic, with random inverted colours in overlayed with random lines, almost like smashed glass.",
    "credit": "https://pride-color-schemes.tumblr.com/post/148074168876/chaosgender"
  },
  {
    "name": "Passimlix",
    "description": "A non-binary in nature gender that is very chaotic and bouncy. it gives the user a feeling of euphoria despite being hard to pin down.",
    "alt": "A flag made of horizontal stripes with the colours: black, cyan, blue, purple, black, black, red, orange, yellow, black. The middle of the flag has the inner portions inside the black switched around, keeping sam order however switched around (black, red, orange, yellow, black, black, cyan, blue, purple, black)",
    "credit": "https://mahoumogai.tumblr.com/post/611331107848323072/passimlix-a-non-binary-in-nature-gender-that-is"
  },
  {
    "name": "Endergender",
    "description": "A subsect of Gamegender that is influenced and/or associated by the game Minecraft. It is a fluid gender that feels as if its \"teleporting\" rapidly and is never in one place. It sometimes picks up chunks from other genders to use for itself before dropping them and moving on.",
    "alt": "A flag with various shades of purple, grey and black. The colours of a enderman.",
    "credit": "https://nebularomantic.tumblr.com/post/181148032634/new-term-endergender-a-subsect-of-gamegender-that"
  },
  {
    "name": "Scenecoric",
    "description": "A xenogender related to scenecore.",
    "alt": "A flag with shades of blue, green, yellow, white, pink, purple and black.",
    "credit": "https://beyond-mogai-pride-flags.tumblr.com/post/182950477110/scenecoric-pride-flag"
  },
  {
    "name": "Staticgender",
    "description": "A gender which can best be described as TV static; fuzzy and incomprehensible.",
    "alt": "A flag consisting of different shades of grey, overlayed by pixels of black like TV static.",
    "credit": "https://pride-color-schemes.tumblr.com/post/148309383964/staticgender"
  },
  {
    "name": "Fluffgender",
    "description": "A very floofy gender. A feeling of soft fluffyness.",
    "alt": "A flag with the colours: green, light blue, purple, lilac, redish orange and yellow. It has a cat-like black line overlay.",
    "credit": "https://insaneishfurry.tumblr.com/post/187402721354/fluffgender"
  },
  {
    "name": "Autigender",
    "description": "A gender which can only be understood in the context of being autistic.",
    "alt": "A flag with a light green to dark green gradient background. The infinity symbol overlayed.",
    "credit": "https://web.archive.org/web/20190410025918/https://www.deviantart.com/pride-flags/art/Autigender-555595042"
  },
/*  {
    "name": "",
    "description": "",
    "alt": "",
    "credit": ""
  },
*/
]
?>

<? genders.forEach(function(gender){ ?>

<? if ("cw" in gender) { ?>
<span class="cw_hidden" role="checkbox" onclick="open_cw(this)" aria-label="Content Warning: <?- gender.cw _?> (click to open, requires javascript)" aria-expanded="false">
<span class="cw_text">Content Warning: <?- gender.cw _?> (click to open)</span>

<div class="cw_content_hidden" aria-hidden=true>
<? } ?>



<div class="gender">
<img class="gender_image" alt="<?- gender.alt _?>" src="img/gender_flags/<?- gender.name.toLowerCase() _?>.jpg">
<div class="gender_text">

## <?- gender.name _?>

<?- gender.description _?>


[Info / Credit](<?- gender.credit _?>)

</div>
</div>
<? if ("cw" in gender) { ?>
</div>
</span>
<? } ?>
<? }); ?>

