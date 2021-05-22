Github 'ha joylashdan oldin yoki keyin README.md ni to'g'rilash kk !!!

Joi - bu Validator. Mn: User ma'lumotlarini update qilishda quyidagi parametrlarning birortasi mos kelmasa xatolik beradi:
    const updateUser = {
    params: Joi.object().keys({
        userId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
        email: Joi.string().email(),
        password: Joi.string().custom(password),
        name: Joi.string(),
        })
        .min(1),
    };

helmet - Turli atakalardan saqlash uchun ishlatiladi. Mn:
    app.use(helmet()) - default xolatda quyidagilarga teng:
        contentSecurityPolicy           - помогает смягчить атаки с использованием межсайтовых сценариев;
        dnsPrefetchControl              - устанавливает X-DNS-Prefetch-Control заголовок, чтобы помочь контролировать предварительную выборку DNS, что может улучшить конфиденциальность пользователей за счет производительности;
        expectCt                        - устанавливает Expect-CTзаголовок, который помогает уменьшить количество неправильно выданных сертификатов SSL;
        frameguard                      - устанавливает X-Frame-Optionsзаголовок, чтобы помочь вам смягчить атаки кликджекинга;
        hidePoweredBy                   - удаляет X-Powered-Byзаголовок, который установлен по умолчанию в некоторых фреймворках;
        hsts                            - устанавливает Strict-Transport-Securityзаголовок, который сообщает браузерам о предпочтении HTTPS над небезопасным HTTP;
        ieNoOpen                        - устанавливает X-Download-Optionsзаголовок, специфичный для Internet Explorer 8. Он заставляет сохранять потенциально небезопасные загрузки, уменьшая выполнение HTML в контексте вашего сайта;
        noSniff                         - устанавливает X-Content-Type-Optionsзаголовок в значение nosniff. Это снижает влияние сниффинга типа MIME, которое может вызвать уязвимости системы безопасности;
        permittedCrossDomainPolicies    - устанавливает X-Permitted-Cross-Domain-Policiesзаголовок, который сообщает некоторым клиентам (в основном, продуктам Adobe) политику вашего домена в отношении загрузки междоменного контента;
        referrerPolicy                  - устанавливает Referrer-Policyзаголовок , который управляет тем, что информация задается в в Refererзаголовке;
        xssFilter                       - отключает ошибочный фильтр межсайтовых сценариев браузеров, задав для X-XSS-Protectionзаголовка значение 0.

xss-clean -  Node.js Connect по промежуточного слоя для очистки пользовательского ввода, поступающего из тела POST, запросов GET и параметров URL.

mongoSanitize - очищает данные, предоставленные пользователем, для предотвращения внедрения оператора MongoDB.

passport - Единственная цель Passport - аутентифицировать запросы, что он делает с помощью расширяемого набора плагинов, известных как стратегии.

morgan - Создаёт новую функцию промежуточного ПО morgan logger, используя заданные format и options.

cors - Cross-origin resource sharing - это механизм, который позволяет запрашивать ограниченные ресурсы на веб-странице из другого домена за пределами домена.

http-status - Утилита для взаимодействия с кодами состояния HTTP. Ya'ni HTTP ning standart message 'larini o'zida saqlaydi. Mn: httpStatus.NOT_FOUND, httpStatus.NO_CONTENT, ... .