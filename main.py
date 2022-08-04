def on_button_pressed_a():
    global PlayerAWins
    PlayerAWins += 1
    basic.show_leds("""
        . # # # .
                . # . # .
                . # # # .
                . # . # .
                . # . # .
    """)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global PlayersTie
    PlayersTie += 1
    basic.show_leds("""
        . # # # .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
    """)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global PlayerBWins
    PlayerBWins += 1
    basic.show_leds("""
        . # # . .
                . # . # .
                . # # # .
                . # . # .
                . # # . .
    """)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

PlayersTie = 0
PlayerBWins = 0
PlayerAWins = 0