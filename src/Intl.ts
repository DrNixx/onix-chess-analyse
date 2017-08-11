import { Intl as IntlCore } from 'onix-core';

export class Intl {
    private static intlInitialized = false;

    public static register() {
        if (!Intl.intlInitialized) {
            IntlCore.register();
            IntlCore.registerStrings('analyse', {
                'ru-ru': {
                    title: "Компьютерный анализ",
                    advantage: "Оценка",
                    mateIn: "Мат через %d",
                    request: "Запросить анализ...",
                    inprogress: "Партия анализируется... Обновите страницу через несколько минут.",
                    loading: "Загрузка...",
                },

                'en-us': {
                    title: "Computer analysis",
                    advantage: "Advantage",
                    mateIn: "Mate in #%d",
                    request: "Request analysis...",
                    loading: "Loading...",
                }
            });

            Intl.intlInitialized = true;
        }
    }
}

