# 1st Day at Camp

## Setting

This game takes place at camp Airy.

## Map

flowchart TD
    B[Bunk] -->|Get Water Bottle & Shoes| H(Go Down Hill)
    CA -->|Go Down Ankle-Breaker| F[Football Field]
    H -->CA[CA rest stop]
    CA -->|Follow Path| O[Pool]
    O -->|Go Across Soccer Field| G[Gym]
    F -->|Go to the Gym| G[Gym]

The player starts at the bunks, and then is directed down the hill.
They can explore, but must eventually make their way to the gym.

## Story
at the begining you start when the bell rings to go to first period, you then have to make your way from village row down to the gym.

## Global Variables

The most important variables are
`Water Bottle` and `Tennis Shoes`, both
booleans that track progress in the
story. Depending on these two variables,
some rooms will display different things.

I also have numeric variables called `day` and `minute` which keep track of 
time. `minute` starts at 0 and counts up
with each move.

I have a little HUD map, and use a bunch of 
boolean variables to control which
rooms the player has discovered. A map is only displayed after the user
visits it.