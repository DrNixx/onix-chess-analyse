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
                    loading: "Загрузка...",
                    averageCentipawnLoss: "В среднем потеряно сотых пешки",
                    inaccuracies: "Сомнительные ходы",
                    mistakes: "Ошибки",
                    blunders: "Грубые ошибки",
                },

                'en-us': {
                    title: "Computer analysis",
                    startpos: "Start position", 
                    advantage: "Advantage",
                    mateIn: "Mate in #%d",
                    request: "Request analysis...",
                    loading: "Loading...",
                    averageCentipawnLoss: "Average centipawn loss",
                    inaccuracies: "Inaccuracies",
                    mistakes: "Mistakes",
                    blunders: "Blunders",
                }
            });

            Intl.intlInitialized = true;
        }
    }
}

