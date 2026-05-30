// Language translations for ALL pages
const translations = {
    ru: {
        // Navigation
        nav_home: 'Главная',
        nav_news: 'Новости',
        nav_about: 'Об авторе',
        nav_contact: 'Обратная связь',
        nav_products: 'Продукты и услуги',
        
        // Banner texts
        banner_promo: 'Специальное предложение!',
        banner_discount: 'Скидка 20% на все курсы',
        banner_placeholder: 'Место для баннера',
        banner_special: ' SPECIAL OFFER ',
        banner_special_text: 'Скидка 20% на все курсы',
        banner_special_date: 'Только до конца месяца!',
        banner_discount_percent: '-20%',
        banner_discount_text: 'При заказе от 2 курсов',
        banner_discount_date: 'Успейте записаться!',
        banner_new_book: ' Новая монография',
        banner_new_book_text: 'Скидка 20% для подписчиков',
        
        // Tag cloud
        tags_title: 'Облако тегов',
        tags: ['историография', 'архивы', 'источники', 'методология', 'исследования', 'публикации'],
        
        // Footer
        footer_company: 'ООО "Историограф"',
        footer_address: 'г. Ростов-на-Дону. Ул. ************ 140',
        footer_phone: '+7 (***) ***-**-**',
        footer_email: 'info@istoriografia.ru',
        footer_created_by: 'Создатель сайта:',
        footer_name: 'Власова Анастаися Дмитриевна, Макарова Алиса Артуровна',

        
        // Common
        read_more: 'Читать далее',
        download: 'Скачать',
        details: 'Подробнее',
        order: 'Заказать',
        signup: 'Записаться',
        learn_more: 'Узнать стоимость',
        contact_us: 'Связаться с нами',
        buy: 'Купить со скидкой',
        download_sample: 'Скачать фрагмент',
        
        // Home page
        home_title: 'Добро пожаловать на практикум по историографии',
        home_subtitle: 'Погрузитесь в мир истории исторической науки',
        home_start_btn: 'Начать обучение',
        home_what_learn: 'Что вы узнаете?',
        home_why_us: 'Почему выбирают нас?',
        home_materials: 'Доступные материалы',
        home_text: 'На нашем сайте вы найдете учебные пособия, методические рекомендации, примеры исследований и многое другое.',
        home_download_program: ' Скачать программу курса',
        home_download_literature: ' Скачать список литературы',
        
        // Features
        feature1_title: 'Эксперты-историки',
        feature1_text: 'Преподаватели с многолетним опытом',
        feature2_title: 'Уникальные материалы',
        feature2_text: 'Доступ к архивным документам',
        feature3_title: 'Поддержка 24/7',
        feature3_text: 'Помощь на всех этапах обучения',
        
        // What you'll learn
        learn1: 'Основные этапы развития исторической науки',
        learn2: 'Методологию исторического исследования',
        learn3: 'Работу с архивными источниками',
        learn4: 'Современные подходы в историографии',
        
        // News page
        news_title: 'Новости практикума',
        news1_title: 'Новый курс по источниковедению',
        news1_text: 'Запущен новый онлайн-курс "Источниковедение XX века". Курс включает лекции, семинары и практические занятия с архивными документами.',
        news1_date: '15 марта 2024',
        news2_title: 'Международная конференция',
        news2_text: 'Приглашаем принять участие в международной конференции "Историография в цифровую эпоху", которая пройдет 15-17 мая 2024 года.',
        news2_date: '1 марта 2024',
        news3_title: 'Новая монография',
        news3_text: 'Вышла в свет монография "Методология исторического исследования: современные подходы". Доступна для скачивания.',
        news3_date: '20 февраля 2024',
        news4_title: 'Вебинар по архивоведению',
        news4_text: 'Состоится бесплатный вебинар "Работа с архивными документами: практические советы". Регистрация открыта.',
        news4_date: '5 февраля 2024',
        news_download_program: ' Скачать программу',
        news_download_letter: ' Скачать информационное письмо',
        news_download_book: ' Скачать монографию',
        news_download_materials: ' Скачать материалы',
        
    
        
        // Contact page
        contact_title: 'Обратная связь',
        contact_info_title: 'Контактная информация',
        contact_email_label: 'Email:',
        contact_phone_label: 'Телефон:',
        contact_address_label: 'Адрес:',
        contact_hours_label: 'Часы работы:',
        contact_hours_value: 'Пн-Пт с 10:00 до 18:00',
        contact_form_title: 'Напишите нам',
        contact_name: 'Ваше имя',
        contact_email: 'Email',
        contact_message: 'Сообщение',
        contact_send: 'Отправить сообщение',
        contact_download_title: 'Документы для скачивания',
        contact_download_form: ' Скачать форму заявки',
        contact_download_contract: ' Скачать договор оферты',
        contact_thanks: 'Спасибо! Ваше сообщение отправлено.',
        
        // Products page
        products_title: 'Продукты и услуги',
        product1_title: 'Онлайн-курс "Введение в историографию"',
        product1_text: 'Базовый курс для начинающих исследователей. 10 лекций + практические задания.',
        product1_price: '4 000 ₽',
        product1_oldprice: '5 000 ₽',
        product2_title: 'Продвинутый курс "Методология истории"',
        product2_text: 'Для магистрантов и аспирантов. Семинары, дискуссии, работа с источниками.',
        product2_price: '6 400 ₽',
        product2_oldprice: '8 000 ₽',
        product3_title: 'Научное консультирование',
        product3_text: 'Помощь в написании статей, диссертаций, научных работ по истории.',
        product3_price: '2 000 ₽/час',
        product4_title: 'Архивные исследования',
        product4_text: 'Помощь в поиске и анализе архивных документов (российские архивы).',
        product4_price: 'от 15 000 ₽',
        product5_title: 'Цифровая обработка данных',
        product5_text: 'Создание баз данных, анализ больших массивов исторических источников.',
        product5_price: 'договорная',
        product6_title: 'Редактура и рецензирование',
        product6_text: 'Профессиональная редактура научных текстов по истории.',
        product6_price: '800 ₽/стр.',
        product6_oldprice: '1 000 ₽',
        
        // Special offers
        special1_title: ' Скидка 20% для групп! ',
        special1_text: 'При заказе курса для группы от 5 человек - дополнительная скидка 20%',
        special1_date: '*Акция действует до 31 декабря 2024 года',
        special2_title: 'Новая монография автора',
        special2_text: '"Методология исторического исследования: современные подходы"',
        special2_discount: 'Специальная цена для участников практикума - 20% скидка'
    },
    
    en: {
        // Navigation
        nav_home: 'Home',
        nav_news: 'News',
        nav_about: 'About',
        nav_contact: 'Contact',
        nav_products: 'Products & Services',
        
        // Banner texts
        banner_promo: 'Special Offer!',
        banner_discount: '20% discount on all courses',
        banner_placeholder: 'Banner space',
        banner_special: ' SPECIAL OFFER ',
        banner_special_text: '20% discount on all courses',
        banner_special_date: 'Only until the end of the month!',
        banner_discount_percent: '-20%',
        banner_discount_text: 'When ordering 2 or more courses',
        banner_discount_date: 'Hurry up to register!',
        banner_new_book: ' New Monograph',
        banner_new_book_text: '20% discount for subscribers',
        
        // Tag cloud
        tags_title: 'Tag Cloud',
        tags: ['historiography', 'archives', 'sources', 'methodology', 'research', 'publications'],
        
        // Footer
        footer_company: 'Istoriograf LLC',
        footer_address: 'г. Ростов-на-Дону. Ул. ************ 140',
        footer_phone: '+7 (***) ***-**-**',
        footer_email: 'info@istoriografia.ru',
        footer_created_by: 'Created by:',
        footer_name: 'Власова Анастаися Дмитриевна, Макарова Алиса Артуровна',
        
        // Common
        read_more: 'Read more',
        download: 'Download',
        details: 'Details',
        order: 'Order',
        signup: 'Sign up',
        learn_more: 'Learn more',
        contact_us: 'Contact us',
        buy: 'Buy with discount',
        download_sample: 'Download sample',
        
        // Home page
        home_title: 'Welcome to Historiography Workshop',
        home_subtitle: 'Immerse yourself in the world of history of historical science',
        home_start_btn: 'Start learning',
        home_what_learn: 'What will you learn?',
        home_why_us: 'Why choose us?',
        home_materials: 'Available materials',
        home_text: 'On our website you will find textbooks, methodological recommendations, research examples and much more.',
        home_download_program: 'Download course program',
        home_download_literature: ' Download reading list',
        
        // Features
        feature1_title: 'Expert Historians',
        feature1_text: 'Teachers with many years of experience',
        feature2_title: 'Unique Materials',
        feature2_text: 'Access to archival documents',
        feature3_title: '24/7 Support',
        feature3_text: 'Help at all stages of learning',
        
        // What you'll learn
        learn1: 'Main stages of development of historical science',
        learn2: 'Methodology of historical research',
        learn3: 'Working with archival sources',
        learn4: 'Modern approaches in historiography',
        
        // News page
        news_title: 'Workshop News',
        news1_title: 'New Course on Source Studies',
        news1_text: 'A new online course "Source Studies of the 20th Century" has been launched. The course includes lectures, seminars and practical exercises with archival documents.',
        news1_date: 'March 15, 2024',
        news2_title: 'International Conference',
        news2_text: 'We invite you to participate in the international conference "Historiography in the Digital Age", which will take place on May 15-17, 2024.',
        news2_date: 'March 1, 2024',
        news3_title: 'New Monograph',
        news3_text: 'The monograph "Methodology of Historical Research: Modern Approaches" has been published. Available for download.',
        news3_date: 'February 20, 2024',
        news4_title: 'Webinar on Archival Science',
        news4_text: 'A free webinar "Working with Archival Documents: Practical Tips" will be held. Registration is open.',
        news4_date: 'February 5, 2024',
        news_download_program: ' Download program',
        news_download_letter: ' Download information letter',
        news_download_book: ' Download monograph',
        news_download_materials: 'Download materials',
        
        // About page
        about_title: 'About the Author',
        about_name: 'Ivan Ivanov Ivanovich',
        about_position: 'Doctor of Historical Sciences, Professor, leading specialist in historiography and methodology of history.',
        about_education: 'Education',
        about_education1: '2005 - graduated from the Faculty of History of Moscow State University',
        about_education2: '2008 - defended PhD dissertation',
        about_education3: '2015 - defended Doctoral dissertation',
        about_interests: 'Research Interests',
        about_interest1: 'History of historical science',
        about_interest2: 'Methodology of historical research',
        about_interest3: 'Source studies of the XX-XXI centuries',
        about_interest4: 'Digital history',
        about_publications: 'Publications',
        about_publications_text: 'Author of more than 150 scientific works, including 5 monographs and 3 textbooks.',
        about_teaching: 'Teaching Activities',
        about_teaching_text: 'Teaches courses on historiography, methodology of history and source studies at leading universities of the country.',
        about_download_cv: ' Download full CV (PDF)',
        about_download_publications: ' Download list of publications',
        
        // Contact page
        contact_title: 'Contact Us',
        contact_info_title: 'Contact Information',
        contact_email_label: 'Email:',
        contact_phone_label: 'Phone:',
        contact_address_label: 'Address:',
        contact_hours_label: 'Working hours:',
        contact_hours_value: 'Mon-Fri from 10:00 to 18:00',
        contact_form_title: 'Write to us',
        contact_name: 'Your name',
        contact_email: 'Email',
        contact_message: 'Message',
        contact_send: 'Send message',
        contact_download_title: 'Documents for download',
        contact_download_form: ' Download application form',
        contact_download_contract: ' Download offer contract',
        contact_thanks: 'Thank you! Your message has been sent.',
        
        // Products page
        products_title: 'Products and Services',
        product1_title: 'Online Course "Introduction to Historiography"',
        product1_text: 'Basic course for beginner researchers. 10 lectures + practical assignments.',
        product1_price: '$50',
        product1_oldprice: '$62',
        product2_title: 'Advanced Course "Methodology of History"',
        product2_text: 'For master and PhD students. Seminars, discussions, work with sources.',
        product2_price: '$80',
        product2_oldprice: '$100',
        product3_title: 'Scientific Consulting',
        product3_text: 'Help in writing articles, dissertations, scientific works on history.',
        product3_price: '$25/hour',
        product4_title: 'Archival Research',
        product4_text: 'Help in searching and analyzing archival documents (Russian archives).',
        product4_price: 'from $190',
        product5_title: 'Digital Data Processing',
        product5_text: 'Creation of databases, analysis of large arrays of historical sources.',
        product5_price: 'negotiable',
        product6_title: 'Editing and Reviewing',
        product6_text: 'Professional editing of scientific texts on history.',
        product6_price: '$10/page',
        product6_oldprice: '$12.5',
        
        // Special offers
        special1_title: '🎓 20% discount for groups! 🎓',
        special1_text: 'When ordering a course for a group of 5 or more people - additional 20% discount',
        special1_date: '*Offer valid until December 31, 2024',
        special2_title: 'New monograph by the author',
        special2_text: '"Methodology of Historical Research: Modern Approaches"',
        special2_discount: 'Special price for workshop participants - 20% discount'
    }
};

let currentLang = 'ru';

// Function to update ALL page content based on language
function updateLanguage() {
    const t = translations[currentLang];
    
    // Update ALL elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update tag cloud
    const tagCloud = document.querySelector('.tags');
    if (tagCloud && t.tags) {
        tagCloud.innerHTML = t.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
    }
    
    // Update all banners and special offers
    updateBannerTexts(t);
    
    // Update product prices and old prices
    updateProductPrices(t);
    
    // Update feature cards
    updateFeatureCards(t);
    
    // Update what you'll learn list
    updateLearnList(t);
    
    // Update news items
    updateNewsItems(t);
    
    // Update about page content
    updateAboutContent(t);
    
    // Update contact page info
    updateContactInfo(t);
}

// Function to update banner texts
function updateBannerTexts(t) {
    // Left sidebar banners
    const bannerSpecial = document.querySelector('.banner.banner-image:first-child');
    if (bannerSpecial) {
        const paragraphs = bannerSpecial.querySelectorAll('p');
        if (paragraphs[0]) paragraphs[0].textContent = t.banner_special;
        if (paragraphs[1]) paragraphs[1].textContent = t.banner_special_text;
        if (paragraphs[2]) paragraphs[2].textContent = t.banner_special_date;
    }
    
    const bannerDiscount = document.querySelectorAll('.banner.banner-image')[1];
    if (bannerDiscount) {
        const paragraphs = bannerDiscount.querySelectorAll('p');
        if (paragraphs[0]) paragraphs[0].textContent = t.banner_discount_percent;
        if (paragraphs[1]) paragraphs[1].textContent = t.banner_discount_text;
        if (paragraphs[2]) paragraphs[2].textContent = t.banner_discount_date;
    }
    
    // Right sidebar banner
    const sideBanner = document.querySelectorAll('.banner.banner-image')[2];
    if (sideBanner) {
        const paragraphs = sideBanner.querySelectorAll('p');
        if (paragraphs[0]) paragraphs[0].textContent = t.banner_new_book;
        if (paragraphs[1]) paragraphs[1].textContent = t.banner_new_book_text;
    }
    
    // Main banner
    const mainBanner = document.querySelector('.main-banner');
    if (mainBanner) {
        const h2 = mainBanner.querySelector('h2');
        const p = mainBanner.querySelector('p');
        const btn = mainBanner.querySelector('.download-btn');
        if (h2) h2.textContent = t.home_title;
        if (p) p.textContent = t.home_subtitle;
        if (btn) btn.textContent = t.home_start_btn;
    }
}

// Function to update product prices
function updateProductPrices(t) {
    const products = document.querySelectorAll('.product-card');
    if (products.length === 0) return;
    
    // Product 1
    if (products[0]) {
        const priceSpan = products[0].querySelector('.product-price');
        if (priceSpan) {
            priceSpan.innerHTML = `${t.product1_price} <span style="text-decoration: line-through; font-size: 14px;">${t.product1_oldprice}</span>`;
        }
        const title = products[0].querySelector('.product-title');
        if (title) title.textContent = t.product1_title;
        const desc = products[0].querySelector('p:not(.product-price)');
        if (desc) desc.textContent = t.product1_text;
    }
    
    // Product 2
    if (products[1]) {
        const priceSpan = products[1].querySelector('.product-price');
        if (priceSpan) {
            priceSpan.innerHTML = `${t.product2_price} <span style="text-decoration: line-through; font-size: 14px;">${t.product2_oldprice}</span>`;
        }
        const title = products[1].querySelector('.product-title');
        if (title) title.textContent = t.product2_title;
        const desc = products[1].querySelector('p:not(.product-price)');
        if (desc) desc.textContent = t.product2_text;
    }
    
    // Product 3
    if (products[2]) {
        const priceSpan = products[2].querySelector('.product-price');
        if (priceSpan) priceSpan.textContent = t.product3_price;
        const title = products[2].querySelector('.product-title');
        if (title) title.textContent = t.product3_title;
        const desc = products[2].querySelector('p:not(.product-price)');
        if (desc) desc.textContent = t.product3_text;
    }
    
    // Product 4
    if (products[3]) {
        const priceSpan = products[3].querySelector('.product-price');
        if (priceSpan) priceSpan.textContent = t.product4_price;
        const title = products[3].querySelector('.product-title');
        if (title) title.textContent = t.product4_title;
        const desc = products[3].querySelector('p:not(.product-price)');
        if (desc) desc.textContent = t.product4_text;
    }
    
    // Product 5
    if (products[4]) {
        const priceSpan = products[4].querySelector('.product-price');
        if (priceSpan) priceSpan.textContent = t.product5_price;
        const title = products[4].querySelector('.product-title');
        if (title) title.textContent = t.product5_title;
        const desc = products[4].querySelector('p:not(.product-price)');
        if (desc) desc.textContent = t.product5_text;
    }
    
    // Product 6
    if (products[5]) {
        const priceSpan = products[5].querySelector('.product-price');
        if (priceSpan) {
            priceSpan.innerHTML = `${t.product6_price} <span style="text-decoration: line-through; font-size: 14px;">${t.product6_oldprice}</span>`;
        }
        const title = products[5].querySelector('.product-title');
        if (title) title.textContent = t.product6_title;
        const desc = products[5].querySelector('p:not(.product-price)');
        if (desc) desc.textContent = t.product6_text;
    }
    
    // Special offers
    const specials = document.querySelectorAll('.special-offer');
    if (specials[0]) {
        const h3 = specials[0].querySelector('h3');
        const p = specials[0].querySelector('p:first-of-type');
        const dateP = specials[0].querySelector('p:last-of-type');
        if (h3) h3.textContent = t.special1_title;
        if (p) p.textContent = t.special1_text;
        if (dateP && dateP.style.fontSize === '14px') dateP.textContent = t.special1_date;
    }
    
    if (specials[1]) {
        const h3 = specials[1].querySelector('h3');
        const p = specials[1].querySelector('p:first-of-type');
        const discountP = specials[1].querySelector('p:nth-of-type(2)');
        if (h3) h3.textContent = t.special2_title;
        if (p) p.textContent = t.special2_text;
        if (discountP) discountP.textContent = t.special2_discount;
    }
}

// Function to update feature cards
function updateFeatureCards(t) {
    const features = document.querySelectorAll('.feature-card');
    if (features.length >= 3) {
        const titles = features[0].querySelector('h3');
        const texts = features[0].querySelector('p');
        if (titles) titles.textContent = t.feature1_title;
        if (texts) texts.textContent = t.feature1_text;
        
        const titles2 = features[1].querySelector('h3');
        const texts2 = features[1].querySelector('p');
        if (titles2) titles2.textContent = t.feature2_title;
        if (texts2) texts2.textContent = t.feature2_text;
        
        const titles3 = features[2].querySelector('h3');
        const texts3 = features[2].querySelector('p');
        if (titles3) titles3.textContent = t.feature3_title;
        if (texts3) texts3.textContent = t.feature3_text;
    }
}

// Function to update learn list
function updateLearnList(t) {
    const learnList = document.querySelector('.article ul:first-of-type');
    if (learnList) {
        const items = learnList.querySelectorAll('li');
        if (items.length >= 4) {
            items[0].textContent = t.learn1;
            items[1].textContent = t.learn2;
            items[2].textContent = t.learn3;
            items[3].textContent = t.learn4;
        }
    }
}

// Function to update news items
function updateNewsItems(t) {
    const newsCards = document.querySelectorAll('.news-card');
    if (newsCards.length >= 4) {
        // News 1
        const date1 = newsCards[0].querySelector('.news-date');
        const title1 = newsCards[0].querySelector('.news-title');
        const text1 = newsCards[0].querySelector('.news-excerpt');
        if (date1) date1.textContent = t.news1_date;
        if (title1) title1.textContent = t.news1_title;
        if (text1) text1.textContent = t.news1_text;
        
        // News 2
        const date2 = newsCards[1].querySelector('.news-date');
        const title2 = newsCards[1].querySelector('.news-title');
        const text2 = newsCards[1].querySelector('.news-excerpt');
        if (date2) date2.textContent = t.news2_date;
        if (title2) title2.textContent = t.news2_title;
        if (text2) text2.textContent = t.news2_text;
        
        // News 3
        const date3 = newsCards[2].querySelector('.news-date');
        const title3 = newsCards[2].querySelector('.news-title');
        const text3 = newsCards[2].querySelector('.news-excerpt');
        if (date3) date3.textContent = t.news3_date;
        if (title3) title3.textContent = t.news3_title;
        if (text3) text3.textContent = t.news3_text;
        
        // News 4
        const date4 = newsCards[3].querySelector('.news-date');
        const title4 = newsCards[3].querySelector('.news-title');
        const text4 = newsCards[3].querySelector('.news-excerpt');
        if (date4) date4.textContent = t.news4_date;
        if (title4) title4.textContent = t.news4_title;
        if (text4) text4.textContent = t.news4_text;
    }
}

// Function to update about page content
function updateAboutContent(t) {
    const aboutContent = document.querySelector('.about-content');
    if (!aboutContent) return;
    
    const name = aboutContent.querySelector('h2');
    if (name) name.textContent = t.about_name;
    
    const position = aboutContent.querySelector('h2 + p');
    if (position) position.textContent = t.about_position;
    
    const headings = aboutContent.querySelectorAll('h3');
    if (headings.length >= 4) {
        headings[0].textContent = t.about_education;
        headings[1].textContent = t.about_interests;
        headings[2].textContent = t.about_publications;
        headings[3].textContent = t.about_teaching;
    }
    
    const lists = aboutContent.querySelectorAll('ul');
    if (lists.length >= 2) {
        const eduItems = lists[0].querySelectorAll('li');
        if (eduItems.length >= 3) {
            eduItems[0].textContent = t.about_education1;
            eduItems[1].textContent = t.about_education2;
            eduItems[2].textContent = t.about_education3;
        }
        
        const interestItems = lists[1].querySelectorAll('li');
        if (interestItems.length >= 4) {
            interestItems[0].textContent = t.about_interest1;
            interestItems[1].textContent = t.about_interest2;
            interestItems[2].textContent = t.about_interest3;
            interestItems[3].textContent = t.about_interest4;
        }
    }
    
    const publicationsText = aboutContent.querySelector('h3:nth-of-type(3) + p');
    if (publicationsText) publicationsText.textContent = t.about_publications_text;
    
    const teachingText = aboutContent.querySelector('h3:nth-of-type(4) + p');
    if (teachingText) teachingText.textContent = t.about_teaching_text;
}

// Function to update contact page info
function updateContactInfo(t) {
    const contactInfo = document.querySelector('.contact-info');
    if (!contactInfo) return;
    
    const emailP = contactInfo.querySelector('p:nth-of-type(1)');
    const phoneP = contactInfo.querySelector('p:nth-of-type(2)');
    const addressP = contactInfo.querySelector('p:nth-of-type(3)');
    const hoursP = contactInfo.querySelector('p:nth-of-type(4)');
    
    if (emailP) emailP.innerHTML = `<strong>${t.contact_email_label}</strong> info@istoriograf.ru`;
    if (phoneP) phoneP.innerHTML = `<strong>${t.contact_phone_label}</strong> +7 (495) 123-45-67`;
    if (addressP) addressP.innerHTML = `<strong>${t.contact_address_label}</strong> ${t.footer_address.replace('📍 ', '')}`;
    if (hoursP) hoursP.innerHTML = `<strong>${t.contact_hours_label}</strong> ${t.contact_hours_value}`;
}

// Function to switch language
function switchLanguage(lang) {
    currentLang = lang;
    updateLanguage();
    
    // Update active button style
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Save language preference
    localStorage.setItem('preferred_language', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
        switchLanguage(savedLang);
    } else {
        switchLanguage('ru');
    }
    
    // Add click handlers for download buttons
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const docFile = currentLang === 'ru' ? 'docs/example-doc-ru.pdf' : 'docs/example-doc.pdf';
            console.log(`Downloading: ${docFile}`);
        });
    });
    
    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(translations[currentLang].contact_thanks);
            this.reset();
        });
    }
});

// Make switchLanguage available globally
window.switchLanguage = switchLanguage;