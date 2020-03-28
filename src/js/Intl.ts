import { Intl as IntlCore } from 'onix-core';

export class Intl {
    private static intlInitialized = false;

    public static register() {
        if (!Intl.intlInitialized) {
            IntlCore.register();
            IntlCore.registerStrings('analyse', {
                'ru-ru': {
                    title: "Компьютерный анализ",
                    startpos: "Начальная позиция",
                    advantage: "Оценка",
                    mateIn: "Мат через %d",
                    request: "Запросить анализ...",
                    inprogress: "Партия анализируется... Обновите страницу через несколько минут.",
                    completed: "Завершено %d %%",
                    loading: "Загрузка...",
                    averageCentipawnLoss: "Средние потери (p/100)",
                    averageCentipawnLossTitle: "В среднем потеряно сотых пешки",
                    inaccuracies: "Неточности",
                    mistakes: "Ошибки",
                    blunders: "Зевки",
                },

                'en-us': {
                    title: "Computer analysis",
                    startpos: "Start position", 
                    advantage: "Advantage",
                    mateIn: "Mate in #%d",
                    request: "Request analysis...",
                    inprogress: "Game analyse in progress... Please reload the page in a few minutes.",
                    completed: "Completed %d %%",
                    loading: "Loading...",
                    averageCentipawnLoss: "Average centipawn loss",
                    averageCentipawnLossTitle: "Average centipawn loss",
                    inaccuracies: "Inaccuracies",
                    mistakes: "Mistakes",
                    blunders: "Blunders",
                }
            });

            Intl.intlInitialized = true;
        }
    }
}

