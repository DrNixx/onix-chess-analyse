import { Intl as IntlCore } from 'onix-core';

var intlInitialized = false;

export function registerStrings() {
    if (!intlInitialized) {
        IntlCore.registerStrings('analyse', {
            'ru-ru': {
                advantage: "Оценка",
                mateIn: "Мат через %d",
                request: "Запросить анализ...",
                inprogress: "Партия анализируется... Обновите страницу через несколько минут.",
                loading: "Загрузка...",
            },

            'en-us': {
                advantage: "Advantage",
                mateIn: "Mate in #%d",
                request: "Request analysis...",
                loading: "Loading...",
            }
        });

        intlInitialized = true;
    }
}
