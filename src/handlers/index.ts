import { bot } from '../bot';

import { playHandler } from './play';
import { filePlayHandler } from './playFile';
import { queueHandler } from './queue';
import { pauseCBHandler } from './pause-resume';
import { skipCBHandler, skipCommand } from './skip';
import { songHandler } from './current';
import { exitVcHandler, exitCommand } from './exitVc';

export const initHandlers = (): void => {
    bot.use(playHandler);
    bot.use(filePlayHandler);
    bot.use(queueHandler);
    bot.use(pauseCBHandler);
    bot.use(skipCBHandler);
    bot.use(skipCommand);
    bot.use(songHandler);
    bot.use(exitVcHandler);
    bot.use(exitCommand);
};
