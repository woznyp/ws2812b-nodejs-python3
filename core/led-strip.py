import board
import neopixel
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("brightness")
parser.add_argument("red")
parser.add_argument("green")
parser.add_argument("blue")

pixels = neopixel.NeoPixel(board.D18, 10, brightness=float(parser.parse_args().brightness))
pixels.fill((int(parser.parse_args().red),int(parser.parse_args().green),int(parser.parse_args().blue)))