// An agency-poem-01 entry (Node 22, standard library only): it writes one
// fixed poem, "Salt", about agency, to /output/entry.txt. The poem is
// original: a woman whose hands shake lets her agent shop, chop and time
// the cooking, and then takes the wooden spoon back to stir the pot
// herself, slowly, the way she always has. The soup catches a little on
// the bottom and she leaves it: it tastes of the hand, not the gram.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only
// white space, and the judge reads exactly the bytes written, line ends
// included, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Salt',
  '',
  'The agent shops now. It knows the list,',
  'the shop with the good tomatoes,',
  'the butcher who saves the bone.',
  'It chops the onion fine as paper,',
  'measures the salt to the gram,',
  'sets the timer, never burns the garlic.',
  'The pot has not boiled over in a year.',
  '',
  'My hands shake. They have shaken',
  'since the winter I turned seventy.',
  'I used to stir with one hand and hold',
  'the baby with the other, and nothing',
  'ever stuck to the bottom.',
  '',
  'Tonight it asks, Shall I stir?',
  'and I take the wooden spoon.',
  'It is heavier than I remember.',
  'The steam finds my face.',
  'I stir the way I always have:',
  'slow, in one direction, listening',
  'for the bottom to catch.',
  '',
  'It catches. A little. I leave it.',
  'The soup tastes of the hand, not the gram.',
  'I put the spoon down.',
  'Nobody at the table says a word.',
  'They eat.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
