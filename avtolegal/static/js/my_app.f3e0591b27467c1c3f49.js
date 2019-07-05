webpackJsonp([1], {
    "2LB7": function(t, s, i) {
        t.exports = i.p + "static/img/06_service.06df128.jpg"
    },
    "3k7w": function(t, s, i) {
        t.exports = i.p + "static/img/3_autohelp.jpg"
    },
    "41oq": function(t, s) {},
    "5KhL": function(t, s, i) {
        var e = {
            "./1_autohelp.jpg": "JClR",
            "./2_autohelp.jpg": "agsB",
            "./3_autohelp.jpg": "3k7w"
        };

        function n(t) {
            return i(a(t))
        }

        function a(t) {
            var s = e[t];
            if (!(s + 1)) throw new Error("Cannot find module '" + t + "'.");
            return s
        }
        n.keys = function() {
            return Object.keys(e)
        }, n.resolve = a, t.exports = n, n.id = "5KhL"
    },
    "6QUe": function(t, s, i) {
        t.exports = i.p + "static/img/02_service.jpg"
    },
    "7Otq": function(t, s, i) {
        t.exports = i.p + "static/img/logo.c8862ac.png"
    },
    "7ob+": function(t, s) {},
    EbYz: function(t, s, i) {
        t.exports = i.p + "static/img/04_service.00c8b22.jpg"
    },
    HQe9: function(t, s, i) {
        t.exports = i.p + "static/img/01_service.jpg"
    },
    Ifp2: function(t, s, i) {
        t.exports = i.p + "static/img/03_service.b90fd20.jpg"
    },
    "Ilrl": function(t, s, i) {
        var e = {
            "./01_service.jpg": "HQe9",
            "./02_service.jpg": "6QUe",
            "./03_service.jpg": "Ifp2",
            "./04_service.jpg": "EbYz",
            "./05_service.jpg": "U0uG",
            "./06_service.jpg": "2LB7"
        };

        function n(t) {
            return i(a(t))
        }

        function a(t) {
            var s = e[t];
            if (!(s + 1)) throw new Error("Cannot find module '" + t + "'.");
            return s
        }
        n.keys = function() {
            return Object.keys(e)
        }, n.resolve = a, t.exports = n, n.id = "Ilrl"
    },
    JClR: function(t, s, i) {
        t.exports = i.p + "static/img/1_autohelp.jpg"
    },
    JUy8: function(t, s) {},
    NHnr: function(t, s, i) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var e = i("7+uW"),
        n = {
            props: {
                isSmall: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    logoSrc: i("7Otq")
                }
            }
        },
        a = {
            render: function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("a", {
                    class: ["logoLink", {
                        smallLogo: this.isSmall
                    }],
                    attrs: {
                        href: "/"
                    }
                }, [s("img", {
                    class: ["logo", {
                        smallLogo: this.isSmall
                    }],
                    attrs: {
                        src: this.logoSrc,
                        alt: "HEADS consulting"
                    }
                })])
            },
            staticRenderFns: []
        },
        r = i("VU/8")(n, a, !1, null, null, null).exports,
        o = {
            props: {
                isNavSticky: {
                    type: Boolean,
                    default: !1
                },
                windowWidth: {
                    type: Number,
                    required: !0
                },
                isShowMobileMenu: {
                    type: Boolean,
                    required: !0
                }
            },
            components: {
                TheLogo: r
            },
            computed: {
                isShowStickyInfo: function() {
                    return this.isNavSticky || this.windowWidth <= 768
                }
            }
        },
        c = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("header", {
                    class: ["theHeader", t.windowWidth <= 768 ? "sticky" : ""],
                    attrs: {
                        id: "headerNav"
                    }
                }, [i("div", {
                    staticClass: "container"
                }, [i("div", {
                    staticClass: "headerInfo"
                }, [i("div", {
                    staticClass: "companyDescription"
                }, [i("TheLogo", {
                    staticClass: "logoHead"
                }), t._v(" "), t._m(0)], 1), t._v(" "), i("div", {
                    staticClass: "phoneWr"
                }, [i("a", {
                    staticClass: "phoneLink",
                    attrs: {
                        href: "tel:+7 (495) 988-97-98"
                    }
                }, [t._v("+7 (495) 988-97-98")]), t._v(" "), i("a", {
                    staticClass: "emailLink",
                    attrs: {
                        href: "mailto:sales@headslegal.ru"
                    }
                }, [t._v("sales@headslegal.ru")]), t._v(" "), i("button", {
                    staticClass: "baseLink",
                    on: {
                        click: function(s) {
                            t.$emit("openModal")
                        }
                    }
                }, [t._v("Заказать обратный звонок")])])]), t._v(" "), i("nav", {
                    staticClass: "mainNav",
                    attrs: {
                        id: "navbar"
                    }
                }, [i("div", {
                    staticClass: "stickyLogo"
                }, [i("div", {
                    class: [t.isShowMobileMenu ? "mobileClose" : "mobileOpenMenu"],
                    on: {
                        click: function(s) {
                            t.$emit("toggleMobileMenu")
                        }
                    }
                }, [i("span")]), t._v(" "), t.isShowStickyInfo ? i("TheLogo", {
                    staticClass: "logoSmall",
                    attrs: {
                        isSmall: ""
                    }
                }) : t._e(), t._v(" "), t._m(1)], 1), t._v(" "), t.isShowStickyInfo ? i("div", {
                    staticClass: "phoneWr"
                }, [i("a", {
                    staticClass: "phoneLink",
                    attrs: {
                        href: "tel:+7 (495) 988-97-98"
                    }
                }, [t._v("+7 (495) 988-97-98")]), t._v(" "), i("a", {
                    staticClass: "emailLink",
                    attrs: {
                        href: "mailto:sales@headslegal.ru"
                    }
                }, [t._v("sales@headslegal.ru")]), t._v(" "), i("button", {
                    staticClass: "baseLink",
                    on: {
                        click: function(s) {
                            t.$emit("openModal")
                        }
                    }
                }, [t._v("Заказать "), t.windowWidth > 450 ? i("span", [t._v("обратный")]) : t._e(), t._v(" звонок")])]) : t._e()])])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "info"
                }, [this._v("\nЮридические услуги в сфере"), s("br"), this._v("\nцифровой экономики\n")])
            }, function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("ul", {
                    staticClass: "navList"
                }, [i("li", [i("a", {
                    attrs: {
                        href: "#advantages"
                    }
                }, [t._v("Преимущества")])]), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "#services"
                    }
                }, [t._v("Услуги")])]), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "#about"
                    }
                }, [t._v("О компании")])]), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "#consult"
                    }
                }, [t._v("Консультация юриста")])]), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "#contacts"
                    }
                }, [t._v("Контакты")])])])
            }]
        };
        var l = i("VU/8")(o, c, !1, function(t) {
            i("umUd")
        }, "data-v-4edbc666", null).exports,
        /* рендер блока преимуществ в хедере */
        v = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("section", {
                    staticClass: "headSection"
                }, [i("div", {
                    staticClass: "overlay"
                }), t._v(" "), i("div", {
                    staticClass: "container "
                }, [t._m(0), t._v(" "), i("a", {
                    staticClass: "lawConsult link",
                    on: {
                        click: function(s) {
                            t.$emit("openModal")
                        }
                    }
                }, [t._v("\nподать заявку\n")]), t._v(" "), t._m(1)])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("h1", { staticClass: "mainHeader" }, [
                    this._v("Закажи пакет необходимых документов "),
                    s("br"),
                    // this._v("документов по 152-ФЗ "),
                    // s("br"),
                    this._v("по 152-ФЗ «О персональных данных» и GDPR, "),
                    // s("br"),
                    s("span", { staticClass: "blueText" }, [this._v("чтобы избежать штрафов и репутационных рисков ")]),
                    s("ul", { staticClass: "headerAdvantagesList" },
                        [
                        s("li", [s("span", [this._v("Privacy policy по GDPR,")])]),
                        s("li", [s("span", [this._v("Соглашение об обработке персональных данных по 152-ФЗ,")])]),
                        s("li", [s("span", [this._v("Cookie policy на русском языке,")])]),
                        s("li", [s("span", [this._v("Cookie policy на английском языке")])])
                        ])
                    ])
            }, function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("div", {
                    staticClass: "grid grid3 headServices"
                }, [i("div", {
                    staticClass: "item"
                }, [i("div", {
                    staticClass: "itemWr"
                }, [i("div", {
                    staticClass: "headIcons employee"
                }), t._v(" "), i("div", {
                    staticClass: "profits"
                }, [t._v("\nПерсональный юрист"), i("br"), t._v("в сфере IT и IP")])])]), t._v(" "), i("div", {
                    staticClass: "item"
                }, [i("div", {
                    staticClass: "itemWr"
                }, [i("div", {
                    staticClass: "headIcons file"
                }), t._v(" "), i("div", {
                    staticClass: "profits"
                }, [t._v("\nПакетное предложение"), i("br"), t._v("\nCookie и Privacy policy\n")])])]), t._v(" "), i("div", {
                    staticClass: "item"
                }, [i("div", {
                    staticClass: "itemWr"
                }, [i("div", {
                    staticClass: "headIcons money"
                }), t._v(" "), i("div", {
                    staticClass: "profits"
                }, [t._v("\nФиксированная цена"), i("br"), t._v("без доплат\n")])])])])
            }]
        };
        var d = i("VU/8")(null, v, !1, function(t) {i("W4IH")}, "data-v-67b759ba", null).exports;
        // окончание HeadSection















        /* начало блока "Нормами ЕС и РФ предусмотрены серьезные штрафные" */
        var h = {
            props: {
                number: {
                    type: String,
                    required: !0
                },
                isRevert: {
                    type: Boolean,
                    required: !0
                },
                header: {
                    type: String,
                    required: !0
                },
                list: {
                    type: Array,
                    required: !0
                }
            },
            // вычисление урла картинки
            computed: {
                imgPath: function() {
                    return i("Ilrl")("./" + this.number + "_service.jpg")
                }
            }
        },
            u = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return t.isRevert ? i("div", {staticClass: "grid grid2"}, [
                    i("div", {staticClass: "item"}, [
                        i("div", {staticClass: "itemWr"}, [
                            i("div", {staticClass: "serviceImageWr"}, [
                                i("img", {attrs: {src: t.imgPath,alt: "some"}})
                            ])
                        ])
                    ]),
                    t._v(" "),
                    i("div", {staticClass: "item"}, [
                        i("div", {staticClass: "itemWr"}, [
                            i("div", {staticClass: "countGroup"}, [
                                i("h3", {staticClass: "count"}, [
                                    t._v(t._s(t.header))
                                ]),
                                t._v(" "),
                                i("ul", t._l(t.list, function(s, e) { return i("li", { key: e }, [i("span",[t._v(t._s(s))])])}))
                            ])
                        ])
                    ])
                ]):
                    i("div", {staticClass: "grid grid2"}, [
                        i("div", {staticClass: "item"}, [
                            i("div", {staticClass: "itemWr"}, [
                                i("div", {staticClass: "countGroup"}, [
                                    i("h3", {staticClass: "count"}, [
                                        t._v(t._s(t.header))
                                    ]),
                                    t._v(" "),
                                    i("ul", t._l(t.list, function(s, e) { return i("li", { key: e }, [i("span",[t._v(t._s(s))])])}))
                                ])
                            ])
                        ]),
                        t._v(" "),
                        i("div", {staticClass: "item"}, [
                            i("div", {staticClass: "serviceImageWr"}, [
                                i("img", {attrs: {src: t.imgPath, alt: "some"}})
                            ])
                        ])
                    ])
            },
            staticRenderFns: []
        };

        var m = {
            components: {
                ServiceItem: i("VU/8")(h, u, !1, function(t) {
                    i("PT+i")
                }, "data-v-7a1c7004", null).exports
            },
            data: function() {
                return {
                    servicesData: [{
                        count: "01",
                        header: "Штраф до 20 000 000 евро",
                        list: [
                        "нарушение условий, применимых к согласию ребенка в отношении услуг информационного сообщества",
                        "нарушения в случаях, когда обработка данных не требует идентификации",
                        "невыполнение соответствующих технических и организационных мер",
                        "Несоблюдение законодательства ЕС",
                        "Нарушение условий передачи данных странам за пределы ЕС",
                        "Нарушение основных принципов обработки, включая условия для согласия"
                        ]
                    }, {
                        count: "02",
                        header: "Штраф до 290 000 руб.",
                        list: [
                        "отсутствие политики обработки персональных данных",
                        "обработка персональных данных несовместимая с целями их сбора",
                        "необеспечение обязанности по сохранности персональных данных",
                        "обработка персональных данных, не предусмотренная законодательс твом ",
                        "обработка персональных данных без письменного согласия",
                        "отсутствие уведомления об обработке персональных данных"
                        ]
                    }],
                    windowWidth: null
                }
            },
            computed: {
                isBigScreen: function() {
                    return !!this.windowWidth && this.windowWidth > 768
                }
            },
            methods: {
                calcWindowWidth: function() {
                    this.windowWidth = window.innerWidth
                }
            },
            mounted: function() {
                window.addEventListener("resize", this.calcWindowWidth), this.calcWindowWidth()
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", this.calcWindowWidth)
            }
        },
        p = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("section", {
                    staticClass: "servicesSection"
                }, [i("div", {
                    staticClass: "section",
                    attrs: {
                        id: "advantages"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "container servicesWr"
                }, [t._m(0), t._v(" "), t._l(t.servicesData, function(s, e) {
                    return i("ServiceItem", {
                        key: s.count,
                        attrs: {
                            number: s.count,
                            isRevert: t.isBigScreen && e % 2 == 1,
                            header: s.header,
                            list: s.list
                        }
                    })
                })], 2)])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("h3", {
                    staticClass: "confidential"
                }, [
                this._v("Нормами ЕС и РФ предусмотрены серьезные штрафные "),
                s("br"),
                this._v("санкции для компаний, которые нарушают положения "),
                s("br"),
                this._v("законодательства. "),
                s("br"),
                s("span", {staticClass: "blue"}, [this._v("Сумма штрафов превышает ")]),
                this._v("стоимость разработанного "),
                s("br"),
                this._v("нами пакета документов "),
                s("br"),
                s("span", {staticClass: "blue"}, [this._v("от 3 до 80 000 000 раз ")])
                ])
            }]
        };
        var f = i("VU/8")(m, p, !1, function(t) {i("putS")}, "data-v-9123c07a", null).exports;
        /* конец блока "Нормами ЕС и РФ предусмотрены серьезные штрафные" */






        /* начало "с разработанным нами пакетом документов" */
        var x = {
            props: {
                header: {
                    type: String,
                    required: !0
                },
                list: {
                    type: Array,
                    required: !0
                },
                id: {
                    type: Number,
                    required: !0
                },
                isRevert: {
                    type: Boolean,
                    required: !0
                },
                mainList: {
                    type: Array,
                    required: !0
                },
                secListDescr: {
                    type: String,
                    required: !0
                },
                bottomText: {
                    type: String,
                    required: !0
                }
            },
            computed: {
                imgPath: function() {
                    return i("5KhL")("./" + this.id + "_autohelp.jpg")
                }
            }
        },
        _ = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return t.isRevert ? i("div", {
                    staticClass: "grid grid2"
                }, [i("div", {
                    staticClass: "item"
                }, [i("div", {
                    staticClass: "itemWr"
                }, [i("div", {
                    staticClass: "serviceImageWr"
                }, [i("img", {
                    attrs: {
                        src: t.imgPath,
                        alt: "some"
                    }
                })])])]), t._v(" "), i("div", { staticClass: "item" },
                [i("div", {staticClass: "itemWr"},
                    [i("div", {staticClass: "autoGroup" },
                     [
                     i("h3", [t._v(t._s(t.header))]),
                     t._v(" "),
                     i("ol",{ staticClass: "mainList"}, t._l(t.mainList, function(s, e) { return i("li", { key: e }, [i('span', [t._v(t._s(s))])])})),
                     i("p", { staticClass: "secListDescr" }, [t._v(t._s(t.secListDescr))]),
                     i("ul", t._l(t.list, function(s, e) { return i("li", { key: e }, [t._v(t._s(s))])})),
                     i("p", { staticClass: "bottomListDescr" }, [t._v(t._s(t.bottomText))])
                     ])
                    ])])])
                :
                i("div", { staticClass: "grid grid2" },
                    [i("div", { staticClass: "item" },
                        [i("div", { staticClass: "itemWr" },
                            [i("div", { staticClass: "autoGroup"},
                                [
                                i("h3", [t._v(t._s(t.header))]),
                                t._v(" "),
                                i("ol",{ staticClass: "mainList"}, t._l(t.mainList, function(s, e) { return i("li", { key: e }, [i('span', [t._v(t._s(s))])])})),
                                i("p", { staticClass: "secListDescr" }, [t._v(t._s(t.secListDescr))]),
                                i("ul", t._l(t.list, function(s, e) { return i("li", { key: e }, [t._v(t._s(s))])})),
                                i("p", { staticClass: "bottomListDescr" }, [t._v(t._s(t.bottomText))])
                                ])
                            ])]), t._v(" "), i("div", { staticClass: "item" },
                    [i("div", { staticClass: "serviceImageWr" },
                        [i("img", {
                            attrs: {
                                src: t.imgPath,
                                alt: "some"
                            }
                        })])])])
            },
            staticRenderFns: []
        };

        var k = {
            components: {
                ServiceAutoItem: i("VU/8")(x, _, !1, function(t) {
                    i("jzch")
                }, "data-v-4b0b0910", null).exports
            },
            data: function() {
                return {
                    autoServiceData: [{
                        id: 1,
                        header: "Правоотношения, подпадающие под действие норм GDPR (General Data Protection Regulation):",
                        mainList : ["Компания (представительство) находится в ЕС", "Субъект данных находится в ЕС"],
                        secListDescr : "Персональные данные по GDPR означают любую информацию, относящуюся к идентифицированному или идентифицируемому физическому лицу и включают в себя:",
                        list: [
                        "имя",
                        "идентификационный номер",
                        "данные о местоположении",
                        "онлайновый идентификатор ",
                        "другие косвенные факторы, такие как физическая, физиологическая, генетическая, умственная, экономическая, культурная или социальная идентичность."
                        ],
                        bottomText : "Свободное перемещение персональных данных в пределах ЕС не ограничивается и не запрещается по причинам, связанным с защитой физических лиц в отношении обработки персональных данных."
                    }, {
                        id: 2,
                        header: "Ключевые требования к сбору данных:",
                        mainList : [],
                        secListDescr : "",
                        list: [
                        "Собираться для определенных и законных целей и не обрабатываться в дальнейшем для других целей;",
                        "Быть адекватными, соответствующими и ограниченными тем, что необходимо в отношении целей, для которых они обрабатываются («минимизация данных»)",
                        "Храниться в форме, которая позволяет идентифицировать субъектов данных не более, чем это необходимо",
                        "Должны обрабатываться таким образом, чтобы обеспечить надлежащую защиту персональных данных, включая защиту от несанкционированной или незаконной обработки, а также от случайной потери, уничтожения или повреждения"
                        ],
                        bottomText : ""
                    }, {
                        id: 3,
                        header: "Федеральный закон РФ от 27 июля 2006 года №152-ФЗ «О персональных данных»",
                        mainList : [],
                        secListDescr : "«Любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных» п. 3 ст. 3",
                        list: [],
                        bottomText : "«В случае, если сайт собирает информацию, содержащую персональные данные (личный кабинет, регистрация и т.д.), то Роскомнадзор автоматически относит организацию к операторам персональных данных. Таким образом организация обязана уведомить ведомство о наличии специальной документации, которая регламентирует ее деятельность» ст. 22"
                    }],
                    windowWidth: null
                }
            },
            computed: {
                isBigScreen: function() {
                    return !!this.windowWidth && this.windowWidth > 768
                }
            },
            methods: {
                calcWindowWidth: function() {
                    this.windowWidth = window.innerWidth
                }
            },
            mounted: function() {
                window.addEventListener("resize", this.calcWindowWidth), this.calcWindowWidth()
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", this.calcWindowWidth)
            }
        },
        g = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("section", {staticClass: "serviceAuto"}, [
                    i("div", {staticClass: "section",attrs: {id: "services"}}),
                    t._v(" "),
                    i("div", {staticClass: "container autoWr"},[
                        t._m(0),
                        t._v(" "),
                        t._l(t.autoServiceData, function(s, e) {
                            return i("ServiceAutoItem", {
                                key: s.id,
                                attrs: {
                                    header: s.header,
                                    id: s.id,
                                    list: s.list,
                                    mainList: s.mainList,
                                    secListDescr: s.secListDescr,
                                    bottomText: s.bottomText,
                                    isRevert: t.isBigScreen && e % 2 == 1
                                }
                            })
                        })
                    ], 2)
                ])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                    s = this._self._c || t;
                return s("p", {staticClass: "confidential"}, [
                    this._v("с разработанным нами "),
                    s("span", {staticClass: "blueText"}, [this._v("пакетом документов ")]),
                    s("br"),
                    s("span", {staticClass: "blueText"}, [this._v("по privacy policy ")]),
                    this._v("вы будете "),
                    s("span", {staticClass: "blueText"}, [this._v("соответствовать ")]),
                    this._v("всем "),
                    s("br"),
                    this._v("требованиям действующего законодательства ")
                ])
            }]
        };

        var gCC = {
            render: function () {
                var t = this,
                    s = t.$createElement,
                    i = t._self._c || s;
                return i("section", {staticClass: "serviceAuto"}, [
                    i("div", {staticClass: "container autoWr"}, [
                        i("p", {staticClass: "confidential"}, [
                            t._v("с разработанным нами "),
                            i("span", {staticClass: "blueText"}, [t._v("пакетом документов ")]),
                            i("br"),
                            i("span", {staticClass: "blueText"}, [t._v("по privacy policy ")]),
                            t._v("вы будете "),
                            i("span", {staticClass: "blueText"}, [t._v("соответствовать ")]),
                            t._v("всем "),
                            i("br"),
                            t._v("требованиям действующего законодательства ")
                        ]),
                        i("div", {staticClass: "grid grid2"}, [
                            i("div", {staticClass: "item"}, [
                                i("div", {staticClass: "itemWr"}, [
                                    i("div", {staticClass: "autoGroup"}, [
                                        i("h3", [t._v("Правоотношения, подпадающие под действие норм GDPR (General Data Protection Regulation): ")]),
                                        i("ol", [
                                            i("li", [
                                                i("span", {staticClass:"blueText"}, [t._v("1. ")]),
                                                t._v("Компания (представительство) находится в ЕС ")
                                            ]),
                                            i("li", [
                                                i("span", {staticClass:"blueText"}, [t._v("2. ")]),
                                                t._v("Субъект данных находится в ЕС ")
                                            ])
                                        ]),
                                        i("p", [
                                            i("span", {staticClass:"blueText"}, [t._v("Персональные данные по GDPR ")]),
                                            t._v("означают любую информацию, относящуюся к идентифицированному или идентифицируемому физическому лицу и включают в себя: ")
                                        ]),
                                        i("ul", [
                                            i("li", [i("span", [t._v("имя ")])]),
                                            i("li", [i("span", [t._v("идентификационный номер ")])]),
                                            i("li", [i("span", [t._v("данные о местоположении ")])]),
                                            i("li", [i("span", [t._v("онлайновый идентификатор ")])]),
                                            i("li", [i("span", [t._v("другие косвенные факторы, такие как физическая физиологическая, генетическая, умственная, экономическая, культурная или социальная идентичность. ")])]),
                                        ]),
                                        i("p", [
                                            i("span", {staticClass:"blueText"}, [t._v("Свободное перемещение персональных данных в пределах ЕС ")]),
                                            i("br"),
                                            t._v("не ограничивается и не запрещается по причинам, связанным "),
                                            i("br"),
                                            t._v("с защитой физических лиц в отношении обработки персональных данных.")
                                        ])
                                    ])
                                ]),
                            ]),
                            i("div", {staticClass: "item"}, [
                                i("div", {staticClass: "serviceImageWr"}, [
                                    i("img", {attrs: {src: "/static/img/1_autohelp.jpg", alt: "some"}})
                                ])
                            ])
                        ]),
                        i("div", {staticClass: "grid grid2"}, [
                            i("div", {staticClass: "item"}, [
                                i("div", {staticClass: "serviceImageWr"}, [
                                    i("img", {attrs: {src: "/static/img/2_autohelp.jpg", alt: "some"}})
                                ])
                            ]),
                            i("div", {staticClass: "item"}, [
                                i("div", {staticClass: "itemWr"}, [
                                    i("div", {staticClass: "autoGroup"}, [
                                        i("h3", [t._v("Ключевые требования к сбору данных: ")]),
                                        i("ul", [
                                            i("li", [i("span", [t._v("Собираться для определенных и законных целей и не обрабатываться в дальнейшем для других целей; ")])]),
                                            i("li", [i("span", [t._v("Быть адекватными, соответствующими и ограниченными тем, что необходимо в отношении целей, для которых они обрабатываются («минимизация данных») ")])]),
                                            i("li", [i("span", [t._v("Храниться в форме, которая позволяет идентифицировать субъектов данных не более, чем это необходимо ")])]),
                                            i("li", [i("span", [t._v("Должны обрабатываться таким образом, чтобы обеспечить надлежащую защиту персональных данных, включая защиту от несанкционированной или незаконной обработки, а также от случайной потери, уничтожения или повреждения ")])]),
                                        ])
                                    ])
                                ]),
                            ])
                        ]),
                        i("div", {staticClass: "grid grid2"}, [
                            /*




ст. 22


                             */
                            i("div", {staticClass: "item"}, [
                                i("div", {staticClass: "itemWr"}, [
                                    i("div", {staticClass: "autoGroup"}, [
                                        i("h3", [t._v("Федеральный закон РФ от 27 июля 2006 года №152-ФЗ «О персональных данных» ")]),

                                        i("p", [
                                            i("span", {staticClass:"blueText"}, [t._v("«Любое действие (операция) или совокупность действий (операций)")]),
                                            t._v(", совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных» "),
                                            i("br"),
                                            i("span", {staticClass:"blueText"}, [t._v("п. 3 ст. 3")]),
                                        ]),
                                        i("p", [
                                            t._v("«В случае, "),
                                            i("span", {staticClass:"blueText"}, [t._v("если сайт собирает информацию")]),
                                            t._v(", содержащую персональные данные (личный кабинет, регистрация и т.д.), то Роскомнадзор автоматически относит организацию к операторам персональных данных. Таким образом организация обязана уведомить ведомство о наличии специальной документации, которая регламентирует ее деятельность» "),
                                            i("br"),
                                            i("span", {staticClass:"blueText"}, [t._v("ст. 22")]),
                                        ])
                                    ])
                                ]),
                            ]),
                            i("div", {staticClass: "item"}, [
                                i("div", {staticClass: "serviceImageWr"}, [
                                    i("img", {attrs: {src: "/static/img/3_autohelp.jpg", alt: "some"}})
                                ])
                            ])
                        ])
                    ])
                ])
            },
            staticRenderFns: []
        };
        // var C = i("VU/8")(k, g, !1, function(t) {i("7ob+")}, "data-v-1322a933", null).exports;
        var C = i("VU/8")(gCC, null, !1, function(t) {i("7ob+")}, "data-v-1322a933", null).exports;
        /* конец "с разработанным нами пакетом документов" */




        /* ******************** */
        var w = {
            render: function(t, s) {
                var i = s._c;
                return i("section", {
                    key: "stats",
                    staticClass: "statsMain"
                }, [i("div", {
                    staticClass: "section",
                    attrs: {
                        id: "about"
                    }
                }), s._v(" "), i("div", {
                    staticClass: "overlay"
                }), s._v(" "), s._m(0)])
            },
            staticRenderFns: [function(t, s) {
                var i = s._c;
                return i("div", {
                    staticClass: "container"
                }, [i("div", {
                    staticClass: "statsWr"
                }, [i("div", {
                    staticClass: "statsHeader"
                }, [s._v("Более 20 лет опыта работы в рамках "), i("br"), s._v("законодательства ЕС и РФ ")]), s._v(" "), i("div", {
                    staticClass: "grid grid3"
                }, [i("div", {
                    staticClass: "item"
                }, [i("div", {
                    staticClass: "itemWr"
                }, [i("div", {
                    staticClass: "statsCount"
                }, [s._v("35"), i("span", {staticClass: "statsCountAddText"}, [s._v("лет")])]), s._v(" "), i("div", {
                    staticClass: "statsDescription"
                }, [s._v("cовокупный опыт "), i("br"), s._v("работы команды ")])])]), s._v(" "), i("div", {
                    staticClass: "item"
                }, [i("div", {
                    staticClass: "itemWr"
                }, [i("div", {
                    staticClass: "statsCount"
                }, [s._v("100"), i("span", {staticClass: "statsCountAddText"}, [s._v("%")])]), s._v(" "), i("div", {
                    staticClass: "statsDescription"
                }, [s._v("соответствие нормам "), i("br"), s._v("GDPR и 152-ФЗ ")])])]), s._v(" "), i("div", {
                    staticClass: "item"
                }, [i("div", {
                    staticClass: "itemWr"
                }, [i("div", {
                    staticClass: "statsCount"
                }, [s._v("14385"), i("span", {staticClass: "statsCountAddText"}, [s._v("")])]), s._v(" "), i("div", {
                    staticClass: "statsDescription"
                }, [s._v("разработанных документов "), i("br"), s._v("за 2018 год ")])])])])])])
            }]
        };
        var q = i("VU/8")(null, w, !0, function(t) {i("e7uk")}, "data-v-5865a825", null).exports;
        /* ******************** */

        /* ******************** */
        var b = {
            data: function() {
                return {
                    imgSrc: i("t5xj")
                }
            }
        },
        S = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("section", {
                    staticClass: "personSection"
                }, [i("div", {
                    staticClass: "container"
                }, [i("div", {
                    staticClass: "personWr"
                }, [t._m(0), t._v(" "), i("div", {
                    staticClass: "grid grid2"
                }, [i("div", {
                    staticClass: "item"
                }, [i("div", {
                    staticClass: "itemWr imgWr"
                }, [i("img", {
                    staticClass: "imgPerson",
                    attrs: {
                        src: t.imgSrc,
                        alt: "Валуев Игорь"
                    }
                })])]), t._v(" "), i("div", {
                    staticClass: "item"
                }, [i("div", {
                    staticClass: "itemWr"
                }, [i("img", {
                    staticClass: "mobileImage",
                    attrs: {
                        src: t.imgSrc,
                        alt: "Валуев Игорь"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "name"
                }, [t._v("Валуев Игорь")]), t._v(" "), i("p", [t._v("Юрист правового департамента ")]), t._v(" "), i("p", [t._v("Специалист в области гражданского права и гражданского процесса. Специализируется на жилищном, наследственном, семейном, трудовом праве, а так же на договорных отношения вытекающих из договоров:\n              купли-продажи, поставки, мены, дарения, ренты, аренды, найма, подряда, оказания услуг, займа и кредита,\n              страхования (в том числе ОСАГО, КАСКО), ДДУ (214 ФЗ).")]), t._v(" "), i("p", [t._v("Так же занимается представлением интересов при рассмотрении дел о привлечении к административной\n              ответственности по делам об административных правонарушениях в области дорожного движения, исполнения\n              решений судов.")]), t._v(" "), i("p", [t._v("\n              Окончил в 2012 году НОЧУ ВПО «Московский Новый Юридический Институт» с присуждением квалификации ЮРИСТ\n              по специальности «Юриспруденция», гражданско-правовая специализация.\n            ")]), t._v(" "), i("p", [t._v("\n              Автор ряда статей для различных печатных и интернет изданий, выступает комментатором и экспертом в\n              различных СМИ.\n            ")]), t._v(" "), i("a", {
                    staticClass: "lawConsult link",
                    on: {
                        click: function(s) {
                            t.$emit("openModal")
                        }
                    }
                }, [t._v("\n              Прокосультироваться с юристом\n            ")])])])])])])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "personDescription"
                }, [this._v("Получите консультацию "), s("br"), this._v("юриста "), s("span", {staticClass: "blueText"}, [this._v(" HEADS Consulting")])])
            }]
        };

        /*
        *
        *
        *
        *
        *
        *
        *
        *
        *
        *
        *
        *
        *
        *
        *
         */
        /* начало блока "Команда" */
        var ttb = {
            render: function() {
                var t = this,
                    s = t.$createElement,
                    i = t._self._c || s;
                return i("section", {staticClass: "ourTeam"},[
                    i("div", {staticClass: "container autoWr"},[
                        i("div", {staticClass: "ourTeamWr"},[
                            i("p", {staticClass: "confidential"},[
                                this._v("Получите консультацию "),
                                s("br"),
                                this._v("юриста "),
                                s("span", {staticClass: "blueText"}, [this._v("HEADS Consulting ")])
                            ]),
                            t._v(" "),
                            i("div", {staticClass: "grid grid2"},[
                                i("div", {staticClass: "teamCards"},[
                                    i("div", {staticClass: "teamItem"},[
                                        i("div", {staticClass: "teamPhoto"},[
                                            i("img", {attrs: {src: "/static/img/team-1.png"}},[])
                                        ]),
                                        i("div", {staticClass: "teamName"},[
                                            this._v("Никита Куликов")
                                        ]),
                                        i("div", {staticClass: "teamDescr"},[
                                            this._v("К.ю.н., эксперт экспертного совета"),
                                            i("br"),
                                            this._v("по Цифровой экономике"),
                                            i("br"),
                                            this._v("Государственной Думы РФ"),
                                            i("br"),
                                            this._v("и экспертного совета"),
                                            i("br"),
                                            this._v("при Совете Федерации РФ.")
                                        ]),
                                        i("a", { staticClass: "lawConsult link", on: { click: function(s) { t.$emit("openModal") }}}, [t._v("Связаться")])
                                    ]),
                                    i("div", {staticClass: "teamItem"},[
                                        i("div", {staticClass: "teamPhoto"},[
                                            i("img", {attrs: {src: "/static/img/team-2.png"}},[])
                                        ]),
                                        i("div", {staticClass: "teamName"},[
                                            this._v("Екатерина Рябченко")
                                        ]),
                                        i("div", {staticClass: "teamDescr"},[
                                            this._v("Юрист отдела по сопровождению"),
                                            i("br"),
                                            this._v("проектов Цифровой экономики"),
                                            i("br"),
                                            this._v("HEADS Consulting")
                                        ]),
                                        i("a", { staticClass: "lawConsult link", on: { click: function(s) { t.$emit("openModal") }}}, [t._v("Связаться")])
                                    ]),
                                    i("div", {staticClass: "teamItem"},[
                                        i("div", {staticClass: "teamPhoto"},[
                                            i("img", {attrs: {src: "/static/img/team-3.png"}},[])
                                        ]),
                                        i("div", {staticClass: "teamName"},[
                                            this._v("Алена Ковалева")
                                        ]),
                                        i("div", {staticClass: "teamDescr"},[
                                            this._v("Юрист отдела по сопровождению"),
                                            i("br"),
                                            this._v("проектов Цифровой экономики"),
                                            i("br"),
                                            this._v("HEADS Consulting")
                                        ]),
                                        i("a", { staticClass: "lawConsult link", on: { click: function(s) { t.$emit("openModal") }}}, [t._v("Связаться")])
                                        // i("button", {staticClass: "teamCall"},[this._v("Связаться")])
                                    ])
                                ])
                            ])
                        ])
                    ])
                ])
            }
        };
        var TTT = i("VU/8")(ttb, null, !1, function(t) {i("dMf/")}, "data-v-6728e452", null).exports;
        /* конец блока "Команда" */





        /* начало блока "Нарушаете ли вы" */
        var xxr = {
                render: function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;

                    return i("section", {staticClass: "violation"},[
                        i("div", {staticClass: "container autoWr"},[
                                i("p", {staticClass: "confidential"},[
                                    this._v("Нарушаете ли вы законодательство "),
                                    s("br"),
                                    this._v("прямо сейчас? "),
                                    s("br"),
                                    s("span", {staticClass: "blueText"}, [this._v("Да, если вы:")])
                                ]),
                                t._v(" "),
                                i("div", {staticClass: "grid grid2"}, [
                                    i("div", {staticClass: "item"}, [
                                        i("ol",{ staticClass: "leftList"}, [
                                            i("li", [i("span", [this._v("Предлагаете посетителям своего сайта зарегистрироваться")])]),
                                            i("li", [i("span", [this._v("Разместили на сайте форму обратной связи")])]),
                                            i("li", [i("span", [this._v("На сайте есть мессенджер для общения с вашим оператором онлайн")])]),
                                            i("li", [i("span", [this._v("Используете файлы Cookie")])]),
                                            i("li", [i("span", [this._v("На сайте установлен идентификатор посетителей по социальным сетям")])])
                                        ])
                                    ]),
                                    i("div", {staticClass: "item"}, [
                                        i("ol",{ staticClass: "rightList", attrs: {start: 6} }, [
                                            i("li", [i("span", [this._v("Установлен call-tracking")])]),
                                            i("li", [i("span", [this._v("Пользуетесь Google Analitics и Яндекс Метрика и отслеживаете поведение ваших \t\t\t\t\tпосетителей на сайте, с записью переходом, IP адресов и т.д.")])]),
                                            i("li", [i("span", [this._v("Иным способом собираете информацию о посетителях сайта")])])
                                        ])
                                    ]),
                                ])
                            ])
                    ])
                }
            };
        var XXM = i("VU/8")(xxr, null, !1, function(t) {i("vLtn")}, "data-v-91231111", null).exports;
        /* конец блока "Нарушаете ли вы" */


        var M = {}, W = {};
        var y = i("VU/8")(M, W, !1, function(t) {
            i("jMPZ")
        }, "data-v-1d001004", null).exports,
        E = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("section", {
                    staticClass: "workFlowSection"
                }, [i("div", {
                    staticClass: "overlay"
                }), t._v(" "), i("div", {
                    staticClass: "container"
                }, [i("div", {
                    staticClass: "workFlowWr"
                }, [t._m(0), t._v(" "), i("div", {
                    staticClass: "grid grid3"
                }, t._l(t.flowList, function(s) {
                    return i("div", {
                        key: s.position,
                        staticClass: "item"
                    }, [i("div", {
                        staticClass: "itemWr"
                    }, [i("div", {
                        staticClass: "statsCount"
                    }, [t._v(t._s(s.position))]), t._v(" "), i("div", {
                        staticClass: "statsDescription workFlowDescription"
                    }, [t._v(t._s(s.description))])])])
                }))])])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("h3", {
                    staticClass: "workFlowTitle"
                }, [this._v("Мы будем "), s("span", [this._v("сопровождать вас на всех этапах")]), this._v(" возврата автомобильных прав: от\n        бесплатной консультации по телефону до\n        вынесения решения суда и получения его на руки")])
            }]
        };
        var U = i("VU/8")({
            data: function() {
                return {
                    flowList: [{
                        position: "01",
                        description: "Предоставляем юридическую консультацию"
                    }, {
                        position: "02",
                        description: "Разрабатываем выигрышную стратегию для разрешения административного спора а вашу пользу"
                    }, {
                        position: "03",
                        description: "Заключаем договор. Принимаем оплату за юридические услуги удобным для вас способом: наличными или с банковской карты"
                    }, {
                        position: "04",
                        description: "Собираем и составляем необходимые документы"
                    }, {
                        position: "05",
                        description: "Ведем дело в суде без вашего присутствия"
                    }, {
                        position: "06",
                        description: "Выдаем решение суда и исполнительный лист на руки"
                    }]
                }
            }
        }, E, !1, function(t) {
            i("JUy8")
        }, "data-v-e10f18da", null).exports,
        N = i("Xxa5"),
        j = i.n(N),
        B = i("exGp"),
        T = i.n(B),
        D = i("mtWM"),
        F = {
            props: {
                viewType: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    userName: "",
                    phone: "",
                    email: "",
                    isFetching: !1,
                    formMessage: "",
                    messageClass: ""
                }
            },
            computed: {
                isFormInvalid: function() {
                    return 0 === this.userName.trim().length || !/^(\d{8,11})$/.test(this.phone) || !/^.+@.+\..+$/.test(this.email)
                },
                formWrClass: function() {
                    return ["grid grid2 formWr", this.viewType]
                }
            },
            methods: {
                handleSubmit: function() {
                    var t = this;
                    return T()(j.a.mark(function s() {
                        var i;
                        return j.a.wrap(function(s) {
                            for (;;) switch (s.prev = s.next) {
                                case 0:
                                return t.isFetching = !0, t.clearFormMessage(), s.prev = 2, s.next = 5, Object(D.post)("http://avtolegal.ru/api/add_user.php", {
                                    username: t.userName.trim(),
                                    phone: t.phone,
                                    email: t.email
                                });
                                case 5:
                                i = s.sent, 200 === i.status ? (t.formMessage = "Заявка успешно отправленна", t.messageClass = "success") : (t.formMessage = "Произошла ошибка. Повторите попытку позже.", t.messageClass = "error"), s.next = 14;
                                break;
                                case 10:
                                s.prev = 10, s.t0 = s.catch(2), t.formMessage = "Произошла ошибка. Повторите попытку позже.", t.messageClass = "error";
                                case 14:
                                t.isFetching = !1;
                                case 15:
                                case "end":
                                return s.stop()
                            }
                        }, s, t, [
                        [2, 10]
                        ])
                    }))()
                },
                clearFormMessage: function() {
                    this.formMessage = ""
                }
            }
        },
        O = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("section", {staticClass: "consultForm"}, [
                    "modal" === t.viewType ? i("button", {staticClass: "closeModal",on: {click: function(s) {t.$emit("close")}}}) : t._e(),
                    t._v(" "),
                    i("div", {staticClass: "section",attrs: {id: "consult"}}),
                    t._v(" "),
                    i("div", {staticClass: "container"},[
                        i("div", {class: t.formWrClass}, [
                            t._m(0),
                            t._v(" "),
                            i("div", {staticClass: "item"}, [
                                i("div", {staticClass: "itemWr"}, [
                                    i("form", [
                                        i("label", {attrs: {for: "username"}},[t._v("Ваше имя")]),
                                        i("input", {
                                            directives: [{name: "model",rawName: "v-model",value: t.userName,expression: "userName"}],
                                            attrs: {type: "text",id: "username",placeholder: "Ваше имя"},
                                            domProps: {value: t.userName},
                                            on: {focus: t.clearFormMessage,input: function(s) {s.target.composing || (t.userName = s.target.value)}}
                                        }),



                                        i("label", {attrs: {for: "phone"}}, [t._v("Ваш телефон")]),
                                        i("input", {
                                            directives: [{name: "model",rawName: "v-model",value: t.phone,expression: "phone"}],
                                            attrs: {type: "text",placeholder: "+7 (999) 888 33 11",id: "phone"},
                                            domProps: {value: t.phone},
                                            on: {focus: t.clearFormMessage,input: function(s) {s.target.composing || (t.phone = s.target.value)}}
                                        }),



                                        i("label", {attrs: {for: "email"}}, [t._v("Ваш email")]),
                                        i("input", {
                                            directives: [{name: "model",rawName: "v-model",value: t.email,expression: "email"}],
                                            attrs: {type: "email", placeholder: "qqq@", id: "email"},
                                            domProps: {value: t.email},
                                            on: {focus: t.clearFormMessage,input: function(s) {s.target.composing || (t.email= s.target.value)}}
                                        }),



                                        i("button", {
                                            staticClass: "lawConsult formBtn",
                                            attrs: {disabled: t.isFormInvalid || t.isFetching},
                                            on: {click: function(s) {s.preventDefault(), t.handleSubmit(s)}}
                                            }, [t._v("\n" + t._s(t.isFetching ? "Обрабатываем запрос" : "Заказать") + "\n")]
                                        ),

                                        t._v(" "),
                                        t.formMessage.length ? i("div", {class: ["resultMessage", t.messageClass]}, [t._v(" " + t._s(t.formMessage) + " ")]) : t._e(),
                                        t._v(" "),
                                        t._m(1)
                                    ])
                                ])
                            ])
                        ])
                    ])
                ])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "item"
                }, [
                    s("div", {staticClass: "itemWr title"},[
                        s("h2", [
                            this._v("закажите "),
                            s("span", {staticClass: "blueText"}, [this._v("4 комплексно")]),
                            s("br"),
                            s("span", {staticClass: "blueText"}, [this._v("проработанных документа:")])
                        ]),
                        s("ul",{staticClass: "listItems"}, [
                            s("li", [
                                s("span", [this._v("privacy policy по GDPR,")])
                            ]),
                            s("li", [
                                s("span", [this._v("соглашение об обработке персональных данных по 152-ФЗ,")])
                            ]),
                            s("li", [
                                s("span", [this._v("cookie policy на русском языке,")])
                            ]),
                            s("li", [
                                s("span", [this._v("cookie policy на английском языке")])
                            ])
                        ]),
                        this._v(" "),
                        s("p", {staticClass: "docsDescr"}, [
                            this._v("по фиксированной цене "),
                            s("br"),
                            s("span", {staticClass: "blueText"}, [this._v("20 000 руб.")])
                        ]),

                    ])
                ])
            }, function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("p", [
                    this._v("Нажимая на кнопку, вы соглашаетесь на обработку "),
                    s("a", {staticClass: "baseLink", attrs: { href: "/static/politika_konfidentsialnosti_khedz.pdf", target: "_blank"}}, [
                        this._v("персональных данных")
                    ])
                ])
            }]
        };
        var H = i("VU/8")(F, O, !1, function(t) {
            i("41oq")
        }, "data-v-0b4c96e7", null).exports,
        G = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("section", {
                    staticClass: "mapSection"
                }, [i("div", {
                    staticClass: "section",
                    attrs: {
                        id: "contacts"
                    }
                }), t._v(" "), i("div", {
                    attrs: {
                        id: "map"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "container mapOverlayWr"
                }, [i("div", {
                    staticClass: "mapOverlay"
                }, [i("a", {
                    staticClass: "phoneLink phone",
                    attrs: {
                        href: "tel:+7 (495) 988-97-98"
                    }
                }, [t._v("\n        +7 (495) 988-97-98\n      ")]), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), i("div", {
                    staticClass: "questions"
                }, [t._v("Остались вопросы?")]), t._v(" "), i("a", {
                    staticClass: "lawConsult link call",
                    on: {
                        click: function(s) {
                            t.$emit("openModal")
                        }
                    }
                }, [t._v("Заказать обратный звонок")])])])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("p", [this._v("г. Москва,"), s("br"), this._v("\n        Нововаганьковский пер., 9, стр.2 ")])
            }, function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("p", [this._v("8 минут пешком от станции метро\n        «Краснопресенская» / «Баррикадная» /"), s("br"), this._v("\n        «Улица 1905 года»")])
            }, function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("p", [this._v("График работы: понедельник - пятница"), s("br"), this._v("\n        с 9:00 до 21:00. Очная консультация юриста\n        возможна по предварительной записи.")])
            }, function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("p", [this._v("Возможна выездная консультация юриста"), s("br"), this._v("\n        в рабочее время по месту нахождения\n        Вашего офиса.")])
            }]
        };
        var R = i("VU/8")(null, G, !1, function(t) {
            i("csDl")
        }, "data-v-1b87dc48", null).exports,
        Y = {
            components: {
                TheLogo: r
            }
        },
        L = {
            render: function() {
                var t = this,
                    s = t.$createElement,
                    i = t._self._c || s;
                return i("footer", {staticClass: "theFooter"}, [
                    i("div", {staticClass: "container"}, [
                        i("div", {staticClass: "grid grid4 center footerWr"}, [
                            i("div", {staticClass: "item"}, [
                                i("div", {staticClass: "itemWr"}, [i("TheLogo")], 1)
                            ]),
                            t._v(" "),
                            t._m(0),
                            t._v(" "),
                            t._m(1),
                            t._v(" "),
                            t._m(2)
                        ])
                    ])
                ])},
            staticRenderFns: [
                function() {
                var t = this,
                    s = t.$createElement,
                    i = t._self._c || s;
                return i("div", {staticClass: "item"}, [
                    i("div", {staticClass: "itemWr companyCodes"}, [
                        i("p", [t._v("Юридические услуги в сфере цифровой экономики")])
                    ])
                ])},
                function(){
                    var t=this.$createElement,
                        s=this._self._c||t;
                    return s("div",{staticClass:"item"},[
                        s("div",{staticClass:"itemWr"},[
                            s("div", [
                                this._v("ООО "),
                                s("span",{staticClass:"blueText"}, [this._v("«Хедз»")])
                            ]),
                            this._v(" "),
                            s("div", [
                                this._v("ИНН "),
                                s("span",{staticClass:"blueText"}, [this._v("7703448871")])
                            ]),
                            this._v(" "),
                            s("div", [
                                this._v("КПП "),
                                s("span",{staticClass:"blueText"}, [this._v("770301001")])
                            ]),
                            this._v(" "),
                            s("div", [
                                this._v("ОГРН "),
                                s("span",{staticClass:"blueText"}, [this._v("1187746406264")])
                            ])
                        ])
                    ])},
                function() {
                    var t = this.$createElement,
                        s = this._self._c || t;
                    return s("div", {staticClass: "item"}, [
                        s("div", {staticClass: "itemWr"}, [
                            s("a", {staticClass: "phoneLink", attrs: {href: "tel:+7 (495) 988-97-98"}}, [
                                this._v("+7 (495) 988-97-98")
                            ]),
                            this._v(" "),
                            s("a", {staticClass: "baseLink",attrs: {href: "#consult"}}, [
                                this._v("Заказать обратный звонок")
                            ])
                        ])
                    ])
                }
            ]
        };


        /*
                function(){
                    var t=this.$createElement,
                        s=this._self._c||t;
                return s("div",{staticClass:"item"},[
                    s("div",{staticClass:"itemWr"},[
                        s("div",[this._v("Разработка сайта")]),
                        this._v(" "),
                        s("a",{staticClass:"studio",attrs:{href:"http://setanera.ru/"}},[
                            this._v("Seta Nera")
                        ])
                    ])
                ])},

                function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {staticClass: "item"}, [
                    s("div", {staticClass: "itemWr"}, [
                        s("a", {staticClass: "phoneLink", attrs: {href: "tel:+7 (495) 988-97-98"}}, [
                            this._v("+7 (495) 988-97-98")
                        ]),
                        this._v(" "),
                        s("a", {staticClass: "baseLink",attrs: {href: "#consult"}}, [
                            this._v("Заказать обратный звонок")
                        ])
                    ])
                ])
                 */

        var I = i("VU/8")(Y, L, !1, function(t) {
            i("RgO0")
        }, "data-v-b7696f26", null).exports,
        P = i("/kJX"),
        z = {
            components: {
                Carousel: P.Carousel,
                Slide: P.Slide
            },
            data: function() {
                return {
                    mediaData: [{
                        id: 1,
                        content: "Как отмечает юрист правового департамента HEADS Consulting Игорь Валуев, в этом году автомобилисты при оплате транспортного налога за 2017 и предыдущие годы должны... ",
                        link: "https://www.sravni.ru/text/2018/1/17/chto-izmenitsja-dlja-avtomobilistov-v-2018-godu/",
                        imgSrc: i("oTmc")
                    }, {
                        id: 2,
                        content: "Но Игорь Валуев из HEADS Consulting не гарантирует аналогичных решений судов: «все зависит от доводов сторон», у Антона Чернина «они были весомые»",
                        link: "https://www.kommersant.ru/doc/3523153",
                        imgSrc: i("TwSe")
                    }, {
                        id: 3,
                        content: "... иного дохода осужденного за период от одного года до трех лет, отмечает юрист правового департамента HEADS Consulting Игорь Валуев.",
                        link: "https://www.gazeta.ru/business/2017/12/12/11399816.shtml",
                        imgSrc: i("aj5o")
                    }, {
                        id: 4,
                        content: "... не имеет права\nосуществлять показ фильма в коммерческих целях, констатирует юрист правового департамента HEADS Consulting Игорь Валуев.",
                        link: "https://www.rbc.ru/society/19/01/2018/5a61ffb89a79474450da3810",
                        imgSrc: i("YrT+")
                    }, {
                        id: 5,
                        content: "... проверить подлинность полиса, — рассказывает юрист правового департамента HEADS Consulting Игорь Валуев.",
                        link: "https://www.sravni.ru/text/2017/12/12/4-vida-moshennichestva-pri-prodazhe-osago-i-kak-ikh-izbezhat/",
                        imgSrc: i("oTmc")
                    }, {
                        id: 6,
                        content: "Юрист правового департамента HEADS Consulting Игорь Валуев пояснил, что не исполнить предписание ФАС заказчик в лице Центра Алмазова по закону не имеет...",
                        link: "https://www.kommersant.ru/doc/3409143",
                        imgSrc: i("TwSe")
                    }],
                    nextNav: '<div class="sliderNav next "></div>',
                    prevNav: '<div class="sliderNav prev"></div>'
                }
            },
            methods: {
                showPrev: function() {
                    console.log("show prev")
                },
                showNext: function() {
                    console.log("show next")
                }
            }
        },
        Q = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("section", {
                    staticClass: "massMediaSection"
                }, [t._m(0), t._v(" "), i("div", {
                    staticClass: "container"
                }, [i("div", {
                    staticClass: "sliderWr"
                }, [i("Carousel", {
                    attrs: {
                        perPage: 3,
                        paginationEnabled: !1,
                        navigationNextLabel: t.nextNav,
                        navigationPrevLabel: t.prevNav,
                        navigationClickTargetSize: 8,
                        perPageCustom: [
                        [320, 1],
                        [1024, 2],
                        [1350, 3]
                        ],
                        navigationEnabled: ""
                    }
                }, t._l(t.mediaData, function(s) {
                    return i("Slide", {
                        key: s.id
                    }, [i("div", {
                        staticClass: "sliderItem"
                    }, [i("div", {
                        staticClass: "sliderItemWr"
                    }, [i("img", {
                        attrs: {
                            src: s.imgSrc,
                            alt: "logo-media"
                        }
                    }), t._v(" "), i("p", [t._v(t._s(s.content))]), t._v(" "), i("a", {
                        attrs: {
                            href: s.link
                        }
                    }, [t._v("Подробности на сайте издания")])])])])
                }))], 1)])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                s = this._self._c || t;
                return s("div", {
                    staticClass: "container"
                }, [s("div", {
                    staticClass: "massMediaHeaderWr"
                }, [s("h2", [this._v("Даем комментарии популярным российским\n        СМИ по актуальным вопросам\n        административного права")])])])
            }]
        };
        var V = i("VU/8")(z, Q, !1, function(t) {
            i("rNUY")
        }, "data-v-704d8e31", null).exports;
        var J = {
            components: {
                ConsultForm: H
            }
        },
        K = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("transition", {
                    attrs: {
                        name: "modal"
                    }
                }, [i("div", {
                    staticClass: "modalMask"
                }, [i("div", {
                    staticClass: "modalWrapper"
                }, [i("div", {
                    staticClass: "modalContainer"
                }, [i("ConsultForm", {
                    attrs: {
                        viewType: "modal"
                    },
                    on: {
                        close: function(s) {
                            t.$emit("close")
                        }
                    }
                })], 1)])])])
            },
            staticRenderFns: []
        };
        var X = i("VU/8")(J, K, !1, function(t) {
            i("rG8n")
        }, "data-v-60007098", null).exports,
        Z = {
            props: {
                isShown: {
                    type: Boolean,
                    required: !0
                }
            }
        },
        $ = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("transition", {
                    attrs: {
                        name: "mobileNav"
                    }
                }, [t.isShown ? i("aside", {
                    staticClass: "mobileNavWr"
                }, [i("div", {
                    staticClass: "mobileNav"
                }, [i("div", {
                    staticClass: "navSection"
                }, [i("div", {
                    staticClass: "info"
                }, [t._v("\n          Юридические услуги в сфере"), i("br"), t._v("\n          административного права\n        ")]), t._v(" "), i("ul", {
                    staticClass: "navList"
                }, [i("li", [i("a", {
                    attrs: {
                        href: "#advantages"
                    }
                }, [t._v("Преимущества")])]), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "#services"
                    }
                }, [t._v("Услуги")])]), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "#about"
                    }
                }, [t._v("О компании")])]), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "#consult"
                    }
                }, [t._v("Консультация юриста")])]), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "#contacts"
                    }
                }, [t._v("Контакты")])])])])])]) : t._e()])
            },
            staticRenderFns: []
        };
        var tt = {
            data: function() {
                return {
                    $navBar: null,
                    navOffset: null,
                    $sections: null,
                    sectionIds: {},
                    isNavSticky: !1,
                    windowWidth: null,
                    isShowModal: !1,
                    isMobileMenuOpened: !1
                }
            },
            name: "App",
            components: {
                TheHeader: l,
                HeadSection: d,
                Violation: XXM,
                ServicesList: f,
                ConsultForm: H,
                ServiceAutoList: C,
                StatsMain: q,
                // PersonValuev: A,
                // PersonHeadPartner: y,
                // WorkFlow: U,
                MapSection: R,
                ourTeam: TTT,
                TheFooter: I,
                // MassMedia: V,
                Modal: X,
                MobileMenu: i("VU/8")(Z, $, !1, function(t) {i("oeCr")}, "data-v-b682ba7c", null).exports
            },
            methods: {
                setSticky: function() {
                    this.windowWidth <= 768 ? this.isNavSticky = !0 : window.pageYOffset >= this.navOffset ? (this.$header.classList.add("sticky"), this.isNavSticky = !0) : (this.$header.classList.remove("sticky"), this.isNavSticky = !1)
                },
                calcWindowWidth: function() {
                    this.windowWidth <= 768 ? this.isNavSticky = !0 : window.pageYOffset < this.navOffset && (this.isNavSticky = !1), this.windowWidth = window.innerWidth
                },
                openModal: function() {
                    this.isShowModal = !0
                },
                closeModal: function() {
                    this.isShowModal = !1
                },
                toggleMobileMenu: function() {
                    this.isMobileMenuOpened = !this.isMobileMenuOpened
                }
            },
            computed: {
                isShownMobile: function() {
                    return this.isMobileMenuOpened && this.isNavSticky && this.windowWidth <= 1250
                }
            },
            created: function() {
                this.calcWindowWidth()
            },
            mounted: function() {
                var t, s;
                this.$header = document.getElementById("headerNav"), this.$navBar = document.getElementById("navbar"), this.navOffset = this.$navBar.scrollY || this.$navBar.scrollTop || this.$navBar.offsetTop || 0, window.addEventListener("scroll", this.setSticky), window.addEventListener("resize", this.calcWindowWidth), this.calcWindowWidth(), t = {
                    lat: 55.758341,
                    lng: 37.5664131
                }, s = new google.maps.Map(document.getElementById("map"), {
                    zoom: 17,
                    center: t,
                    disableDefaultUI: !0
                }), new google.maps.Marker({
                    position: t,
                    map: s
                })
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", this.calcWindowWidth)
            }
        },
        st = {
            render: function() {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("div", {
                    attrs: {
                        id: "app"
                    }
                }, [
                    i("MobileMenu", {attrs: {isShown: t.isShownMobile}}),
                    t._v(" "),
                    i("TheHeader", {attrs: {isNavSticky: t.isNavSticky,windowWidth: t.windowWidth,isShowMobileMenu: t.isMobileMenuOpened},on: {openModal: t.openModal,toggleMobileMenu: t.toggleMobileMenu}}),
                    t._v(" "),
                    i("HeadSection", {on: {openModal: t.openModal}}),
                    t._v(" "),
                    i("Violation"),
                    t._v(" "),
                    i("ServicesList"),
                    t._v(" "),
                    i("ConsultForm"),
                    t._v(" "),
                    i("ServiceAutoList"),
                    t._v(" "),
                    i("StatsMain"),
                    t._v(" "),
                    // i("PersonValuev", {on: {openModal: t.openModal}}),
                    // t._v(" "),
                    // i("MassMedia"),
                    // t._v(" "), i("PersonHeadPartner", {on: {openModal: t.openModal}}),
                    // t._v(" "),
                    // i("WorkFlow"),
                    // t._v(" "),
                    i("ourTeam", {on: {openModal: t.openModal}}),
                    t._v(" "),
                    i("MapSection", {on: {openModal: t.openModal}}),
                    t._v(" "),
                    i("TheFooter"),
                    t._v(" "),
                    t.isShowModal ? i("Modal", {on: {close: t.closeModal}}) : t._e()
                ], 1)
            },
            staticRenderFns: []
        };
        var it = i("VU/8")(tt, st, !1, function(t) {
            i("Z3p7")
        }, null, null).exports;
        e.a.config.productionTip = !1, new e.a({
            el: "#app",
            components: {
                App: it
            },
            template: "<App/>"
        })
    },
    "PT+i": function(t, s) {},
    RgO0: function(t, s) {},
    TwSe: function(t, s, i) {
        t.exports = i.p + "static/img/logo-komersant.913152f.png"
    },
    U0uG: function(t, s, i) {
        t.exports = i.p + "static/img/05_service.3cad1eb.jpg"
    },
    W4IH: function(t, s) {},
    "YrT+": function(t, s) {
        t.exports = "data:image/png;base64,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"
    },
    Z3p7: function(t, s) {},
    agsB: function(t, s, i) {
        t.exports = i.p + "static/img/2_autohelp.jpg"
    },
    aj5o: function(t, s) {
        t.exports = "data:image/png;base64,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"
    },
    csDl: function(t, s) {},
    "dMf/": function(t, s) {},
    "xTTT": function(t, s) {},
    e7uk: function(t, s) {},
    jMPZ: function(t, s) {},
    jzch: function(t, s) {},
    putS: function(t, s) {},
    vltb: function(t, s) {},
    oTmc: function(t, s) {
        t.exports = "data:image/png;base64,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"
    },
    oeCr: function(t, s) {},
    vLtn: function(t, s) {},
    rG8n: function(t, s) {},
    rNUY: function(t, s) {},
    t5xj: function(t, s, i) {t.exports = i.p + "static/img/valuev.3589bd4.jpg"},
    umUd: function(t, s) {},
    x7SK: function(t, s, i) {t.exports = i.p + "static/img/bazikin.a860b2d.jpg"}
}, ["NHnr"]);