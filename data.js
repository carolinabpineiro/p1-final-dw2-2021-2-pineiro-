const vinos = {
    1: {
        id: 1,
        nombre: "Malbec Reserva",
        descripcion: "Un Malbec con notas de frutos rojos y  madera. Ideal para acompañar carnes.",
        descripcionExtendida: "Nuestro Malbec Reserva es un vino que encarna la esencia misma del terroir argentino. Procedente de viñedos antiguos situados en las laderas de las montañas, este vino se caracteriza por sus intensas notas de frutos rojos maduros, como cerezas y frambuesas, complementadas con un delicado toque de madera que le otorga una profundidad singular. La cosecha se realiza a mano, seleccionando meticulosamente las mejores uvas para asegurar la máxima calidad. Durante la vinificación, el vino es envejecido en barricas de roble francés durante 12 meses, lo que contribuye a su estructura robusta y a sus complejas capas de sabor. El resultado es un Malbec con un final largo y elegante, ideal para acompañar carnes a la parrilla o platos de sabor intenso. Su riqueza y cuerpo lo convierten en una elección perfecta para celebraciones y cenas especiales, donde cada sorbo cuenta una historia de pasión y dedicación enológica.",
        precio: 12000,
        categoria: "Tinto",
        imagen: "./images/vinos/1.png"
    },
    2: {
        id: 2,
        nombre: "Chardonnay",
        descripcion: "Un Chardonnay fresco con aromas a manzana verde y un toque de vainilla.",
        descripcionExtendida: "Este Chardonnay se distingue por su frescura y sofisticación. Cultivado en viñedos situados en regiones frescas, donde el clima temperado permite un desarrollo óptimo de los aromas, este vino presenta notas vivas de manzana verde y un sutil toque de vainilla. La cosecha es realizada en su punto óptimo de maduración, asegurando la máxima expresión de sus características aromáticas. Después de una fermentación en barricas de roble, el vino se somete a un proceso de crianza sobre lías, lo que le otorga una textura cremosa y un delicado carácter a mantequilla. Su equilibrio entre acidez y notas frutales lo convierte en un acompañamiento ideal para pescados y mariscos, así como para platos con salsas cremosas. Con cada copa, podrás disfrutar de la elegancia y la frescura que definen a este Chardonnay, reflejando la meticulosa atención al detalle en cada etapa de su producción.",
        precio: 7100,
        categoria: "Blanco",
        imagen: "./images/vinos/2.jpg"
    },
    3: {
        id: 3,
        nombre: "Cabernet Sauvignon",
        descripcion: "Intenso y robusto, con notas de casis y especias. Perfecto para una cena gourmet.",
        descripcionExtendida: "El Cabernet Sauvignon es uno de los vinos más emblemáticos, y nuestro ejemplar destaca por su intensidad y carácter. Proveniente de viñedos de alta altitud, este vino presenta notas vibrantes de casis, pimienta negra y especias, acompañadas de un profundo color rubí. La cosecha se realiza en su punto óptimo de maduración, y el vino se vinifica en tanques de acero inoxidable para preservar sus aromas frutales. Posteriormente, se somete a un envejecimiento en barricas de roble durante 18 meses, lo que le confiere una estructura robusta y taninos suaves. Su perfil de sabor complejo y su notable capacidad de envejecimiento lo hacen ideal para acompañar platos gourmet, como carnes rojas y quesos curados. Cada botella de Cabernet Sauvignon cuenta la historia de una cuidadosa elaboración, reflejando el compromiso con la calidad y la tradición vinícola.",
        precio: 13000,
        categoria: "Tinto",
        imagen: "./images/vinos/3.jpg"
    },
    4: {
        id: 4,
        nombre: "Sauvignon Blanc",
        descripcion: "Un vino blanco con notas cítricas y herbáceas. Ideal para mariscos.",
        descripcionExtendida: "Nuestro Sauvignon Blanc ofrece una experiencia sensorial única, con su vibrante perfil aromático y refrescante acidez. Cultivado en viñedos ubicados en regiones frescas, este vino presenta notas cítricas de pomelo y limón, complementadas con un sutil matiz herbáceo. La cosecha se lleva a cabo en las primeras horas de la mañana para preservar la frescura de las uvas. La fermentación en frío en tanques de acero inoxidable garantiza que el vino mantenga su carácter frutal y su vivaz acidez. Ideal para maridar con mariscos y ensaladas, este Sauvignon Blanc es perfecto para ocasiones informales y reuniones sociales, aportando una sensación de frescura y ligereza con cada sorbo.",
        precio: 11500,
        categoria: "Blanco",
        imagen: "./images/vinos/4.jpg"
    },
    5: {
        id: 5,
        nombre: "Malbec Joven",
        descripcion: "Un Malbec joven, con sabor a frutas frescas y un final suave.",
        descripcionExtendida: "El Malbec Joven es un vino que celebra la frescura y la vitalidad de la uva Malbec. Originario de viñedos en altitudes moderadas, este vino presenta notas frutales de ciruela y cereza, con un toque suave de especias. La cosecha se realiza con gran cuidado para seleccionar solo las uvas más saludables, y el vino se vinifica en tanques de acero inoxidable para preservar su carácter afrutado y su vivacidad. Sin crianza en barrica, este Malbec mantiene una expresión pura y directa de la fruta, con taninos suaves y un final agradable. Ideal para disfrutar en cualquier ocasión, ya sea con comidas ligeras o en una reunión informal, este vino es un testimonio de la calidad y el estilo fresco que caracteriza a nuestro viñedo.",
        precio: 4000,
        categoria: "Tinto",
        imagen: "./images/vinos/5.jpg"
    },
    6: {
        id: 6,
        nombre: "Pinot Noir",
        descripcion: "Un Pinot Noir elegante, con notas de cereza y especias.",
        descripcionExtendida: "El Pinot Noir es conocido por su elegancia y complejidad, y nuestro ejemplar no es la excepción. Cultivado en viñedos con suelos bien drenados y clima moderado, este vino presenta delicadas notas de cereza roja, frambuesa y un toque sutil de especias. La cosecha se realiza a mano para garantizar la selección de las mejores uvas, y el vino se vinifica con cuidado en tanques de acero inoxidable. Posteriormente, se envejece en barricas de roble francés durante 12 meses, lo que le confiere una textura suave y un bouquet aromático refinado. Ideal para acompañar platos de aves, cerdo o pescados grasos, el Pinot Noir es un vino que ofrece una experiencia de cata sofisticada y memorable, reflejando la habilidad y la tradición en su elaboración.",
        precio: 18000,
        categoria: "Tinto",
        imagen: "./images/vinos/6.jpg"
    },
    7: {
        id: 7,
        nombre: "Riesling",
        descripcion: "Un Riesling aromático con notas de melaza y un toque dulce.",
        descripcionExtendida: "Nuestro Riesling es un vino que combina armoniosamente frescura y dulzura, ofreciendo una experiencia aromática única. Procedente de viñedos en regiones frescas, este vino destaca por sus notas de melaza, miel y un toque sutil de flores blancas. La cosecha se lleva a cabo con cuidado para seleccionar las uvas en su punto óptimo de maduración, y el vino se vinifica en tanques de acero inoxidable para preservar su frescura y su carácter aromático. Con una leve dulzura que se equilibra perfectamente con su acidez, el Riesling es ideal para acompañar platos picantes y de sabores intensos, así como para disfrutar solo como aperitivo. Cada sorbo revela la calidad y la dedicación que se ha puesto en su elaboración, haciendo de este Riesling una elección encantadora para cualquier ocasión.",
        precio: 12500,
        categoria: "Blanco",
        imagen: "./images/vinos/7.jpg"
    },
    8: {
        id: 8,
        nombre: "Syrah",
        descripcion: "Un vino robusto y especiado con notas de pimienta negra y frutas maduras.",
        descripcionExtendida: "El Syrah es un vino que destaca por su robustez y su carácter especiado. Procedente de viñedos en regiones cálidas, este vino presenta un perfil de sabor intenso, con notas de pimienta negra, bayas maduras y un toque de chocolate oscuro. La cosecha se realiza cuando las uvas han alcanzado su máxima madurez, y el vino se vinifica en tanques de acero inoxidable para preservar su perfil aromático. Posteriormente, se envejece en barricas de roble durante 18 meses, lo que le confiere una estructura firme y un final persistente. Ideal para acompañar platos a base de carne, como estofados y parrilladas, el Syrah es un vino que ofrece una experiencia de cata profunda y satisfactoria, revelando la riqueza y la complejidad de su origen.",
        precio: 13500,
        categoria: "Tinto",
        imagen: "./images/vinos/8.png"
    },
    9: {
        id: 9,
        nombre: "Malbec Gran Reserva",
        descripcion: "Un Malbec con gran estructura, notas de cacao y un largo final.",
        descripcionExtendida: "El Malbec Gran Reserva es una expresión suprema de la uva Malbec, destacando por su gran estructura y complejidad. Procedente de viñedos de altitud, este vino presenta notas profundas de cacao, frutos secos y un toque de especias. La cosecha se realiza en el momento óptimo para asegurar la calidad, y el vino se vinifica con técnicas tradicionales en tanques de acero inoxidable. Posteriormente, se somete a un envejecimiento prolongado en barricas de roble francés durante 24 meses, lo que le confiere una estructura robusta y un final largo y elegante. Ideal para acompañar platos de carne de alta gama y quesos curados, el Malbec Gran Reserva es un vino que promete una experiencia de cata excepcional, reflejando la pasión y la maestría en su elaboración.",
        precio: 16000,
        categoria: "Tinto",
        imagen: "./images/vinos/9.jpg"
    },
    10: {
        id: 10,
        nombre: "Chenin Blanc",
        descripcion: "Un Chenin Blanc fresco con notas de miel y flores blancas.",
        descripcionExtendida: "El Chenin Blanc es un vino que ofrece una frescura vibrante y una elegancia sutil. Cultivado en viñedos de clima fresco, este vino presenta notas de miel, flores blancas y un toque de frutas cítricas. La cosecha se lleva a cabo con gran cuidado para asegurar la máxima expresión de los aromas, y el vino se vinifica en tanques de acero inoxidable para preservar su frescura. Con una acidez refrescante y un final armonioso, el Chenin Blanc es ideal para acompañar platos de pescado, ensaladas y aperitivos. Cada copa revela la atención al detalle y la dedicación que se ha puesto en su elaboración, haciendo de este Chenin Blanc una elección encantadora para disfrutar en cualquier ocasión.",
        precio: 20000,
        categoria: "Blanco",
        imagen: "./images/vinos/10.jpg"
    },
    11: {
        id: 11,
        nombre: "Merlot",
        descripcion: "Un Merlot suave con notas de ciruelas y chocolate.",
        descripcionExtendida: "El Merlot es un vino que destaca por su suavidad y su perfil aromático seductor. Procedente de viñedos en regiones de clima moderado, este vino presenta notas de ciruelas maduras, chocolate y un sutil toque de vainilla. La cosecha se realiza cuidadosamente para seleccionar las mejores uvas, y el vino se vinifica en tanques de acero inoxidable. Posteriormente, se envejece en barricas de roble durante 12 meses, lo que le confiere una textura suave y una complejidad equilibrada. Ideal para acompañar platos de carne roja, pastas y quesos suaves, el Merlot ofrece una experiencia de cata agradable y accesible, reflejando la calidad y el estilo característico de nuestro viñedo.",
        precio: 11500,
        categoria: "Tinto",
        imagen: "./images/vinos/11.jpg"
    },
    12: {
        id: 12,
        nombre: "Viognier",
        descripcion: "Un vino blanco con notas de durazno y flores blancas.",
        descripcionExtendida: "El Viognier es un vino que cautiva con su perfil aromático floral y afrutado. Procedente de viñedos en regiones de clima cálido, este vino presenta notas de durazno maduro, flores blancas y un toque de especias suaves. La cosecha se realiza en el momento óptimo para preservar la frescura y la intensidad de los aromas, y el vino se vinifica en tanques de acero inoxidable. Su textura suave y su acidez equilibrada lo hacen ideal para acompañar platos de mariscos, aves y ensaladas. Cada copa de Viognier ofrece una experiencia sensorial sofisticada y elegante, reflejando la dedicación y el arte en la elaboración de este excepcional vino.",
        precio: 13200,
        categoria: "Blanco",
        imagen: "./images/vinos/12.jpg"
    },
    13: {
        id: 13,
        nombre: "Malbec-Cabernet",
        descripcion: "Un blend de Malbec y Cabernet Sauvignon con notas de frutos rojos y especias.",
        descripcionExtendida: "El blend de Malbec y Cabernet Sauvignon es una combinación magistral que ofrece una complejidad y riqueza excepcionales. Este vino mezcla la intensidad y la profundidad del Malbec con la estructura y las notas especiadas del Cabernet Sauvignon. Procedente de viñedos de alta calidad, el vino presenta notas de frutos rojos maduros, especias y un toque de madera. La cosecha se realiza con gran cuidado para seleccionar las mejores uvas de cada variedad, y el vino se vinifica en tanques de acero inoxidable y se envejece en barricas de roble durante 15 meses. Ideal para acompañar platos de carne asada y quesos curados, este blend ofrece una experiencia de cata equilibrada y sofisticada, revelando la armonía entre las dos variedades de uva.",
        precio: 14000,
        categoria: "Tinto",
        imagen: "./images/vinos/13.jpg"
    },
    14: {
        id: 14,
        nombre: "Sémillon",
        descripcion: "Un Sémillon con notas de miel y un final largo y agradable.",
        descripcionExtendida: "El Sémillon es un vino que destaca por su riqueza y suavidad. Cultivado en viñedos de clima cálido, este vino presenta notas de miel, frutas maduras y un toque de especias. La cosecha se realiza cuidadosamente para asegurar la calidad de las uvas, y el vino se vinifica en barricas de roble, donde se somete a una crianza prolongada que le confiere una textura cremosa y un final largo y agradable. Ideal para acompañar platos de mariscos, aves y comidas con salsas a base de crema, el Sémillon es una elección elegante que ofrece una experiencia de cata rica y compleja, reflejando la calidad y la tradición en su elaboración.",
        precio: 19500,
        categoria: "Blanco",
        imagen: "./images/vinos/14.jpg"
    },
    15: {
        id: 15,
        nombre: "Tempranillo",
        descripcion: "Un Tempranillo con notas de frutas rojas y especias, con un toque de roble.",
        descripcionExtendida: "Nuestro Tempranillo es un vino que combina la intensidad de las frutas rojas con la sutileza de las especias y el roble. Procedente de viñedos en regiones de clima moderado, este vino presenta notas de cerezas, ciruelas y un toque de especias, complementado con un sutil matiz de roble. La cosecha se realiza en el punto óptimo de maduración, y el vino se vinifica en tanques de acero inoxidable antes de ser envejecido en barricas de roble durante 12 meses. Su perfil de sabor equilibrado y su textura suave lo hacen ideal para acompañar platos de carne, tapas y quesos. Cada copa de Tempranillo refleja la calidad y la dedicación en su elaboración, ofreciendo una experiencia de cata accesible y placentera.",
        precio: 9500,
        categoria: "Tinto",
        imagen: "./images/vinos/15.jpg"
    },
    16: {
        id: 16,
        nombre: "Grenache",
        descripcion: "Un Grenache suave con notas de frutas rojas y un toque de pimienta.",
        descripcionExtendida: "El Grenache es un vino que destaca por su suavidad y su perfil afrutado. Proveniente de viñedos en regiones cálidas, este vino presenta notas de frutas rojas, como fresas y cerezas, con un sutil toque de pimienta negra. La cosecha se realiza con gran cuidado para seleccionar las mejores uvas, y el vino se vinifica en tanques de acero inoxidable. Posteriormente, se envejece en barricas de roble durante 12 meses, lo que le confiere una textura suave y un final largo. Ideal para acompañar platos de pasta, carnes a la parrilla y quesos suaves, el Grenache ofrece una experiencia de cata equilibrada y agradable, reflejando la elegancia y la sofisticación de esta variedad de uva.",
        precio: 14000,
        categoria: "Tinto",
        imagen: "./images/vinos/16.jpg"
    },
    17: {
        id: 17,
        nombre: "Chardonnay Barrica",
        descripcion: "Un Chardonnay con crianza en barrica, con notas de vainilla y madera.",
        descripcionExtendida: "El Chardonnay Barrica es un vino que combina la frescura de la uva Chardonnay con la complejidad y riqueza de la crianza en barrica. Cultivado en viñedos de clima templado, este vino presenta notas de frutas tropicales, como piña y mango, complementadas con matices de vainilla y madera, resultado del envejecimiento en barricas de roble. La cosecha se realiza en el momento óptimo para preservar el carácter frutal, y el vino se envejece en barricas durante 10 meses, lo que le confiere una textura cremosa y un final largo y elegante. Ideal para acompañar platos de mariscos, aves y comidas con salsas a base de crema, el Chardonnay Barrica ofrece una experiencia de cata sofisticada y compleja, reflejando la calidad y la dedicación en su elaboración.",
        precio: 18000,
        categoria: "Blanco",
        imagen: "./images/vinos/17.jpg"
    },
    18: {
        id: 18,
        nombre: "Zinfandel",
        descripcion: "Un Zinfandel con notas de frutas oscuras y especias, con un toque de roble.",
        descripcionExtendida: "El Zinfandel es un vino que ofrece una explosión de sabores intensos y especiados. Procedente de viñedos en regiones cálidas, este vino presenta notas de frutas oscuras, como moras y ciruelas, con un toque de especias y un sutil matiz de roble. La cosecha se realiza con gran cuidado para seleccionar las mejores uvas, y el vino se vinifica en tanques de acero inoxidable antes de ser envejecido en barricas de roble durante 12 meses. Su perfil de sabor complejo y su estructura robusta lo hacen ideal para acompañar platos de carne asada, estofados y quesos curados. Cada copa de Zinfandel revela la riqueza y la profundidad de esta variedad, ofreciendo una experiencia de cata intensa y satisfactoria.",
        precio: 15500,
        categoria: "Tinto",
        imagen: "./images/vinos/18.jpg"
    },
    19: {
        id: 19,
        nombre: "Petit Verdot",
        descripcion: "Un Petit Verdot con notas de frutos negros y un toque de especias.",
        descripcionExtendida: "El Petit Verdot es un vino que destaca por su intensidad y profundidad, con un perfil aromático de frutos negros y especias. Cultivado en viñedos de alta calidad, este vino presenta notas de moras, ciruelas y un toque de especias, complementadas por un sutil matiz de roble. La cosecha se realiza en el momento óptimo para asegurar la máxima expresión de la fruta, y el vino se vinifica en tanques de acero inoxidable antes de ser envejecido en barricas de roble durante 18 meses. Ideal para acompañar platos de carne roja, estofados y quesos curados, el Petit Verdot ofrece una experiencia de cata rica y compleja, reflejando la pasión y la habilidad en su elaboración.",
        precio: 17000,
        categoria: "Tinto",
        imagen: "./images/vinos/19.jpg"
    },
    20: {
        id: 20,
        nombre: "Tempranillo Gran Reserva",
        descripcion: "Un Tempranillo con gran estructura y notas de frutas maduras y especias.",
        descripcionExtendida: "El Tempranillo Gran Reserva es un vino que combina la intensidad de la variedad Tempranillo con la complejidad del envejecimiento prolongado. Procedente de viñedos seleccionados, este vino presenta notas de frutas maduras, como cerezas y ciruelas, con un toque de especias y un sutil matiz de roble. La cosecha se realiza en el momento óptimo para asegurar la calidad, y el vino se vinifica en tanques de acero inoxidable antes de ser envejecido en barricas de roble durante 24 meses. Su estructura robusta y su final largo lo hacen ideal para acompañar platos de carne asada y quesos curados. Cada copa de Tempranillo Gran Reserva refleja la calidad y la tradición en su elaboración, ofreciendo una experiencia de cata profunda y satisfactoria.",
        precio: 20000,
        categoria: "Tinto",
        imagen: "./images/vinos/20.jpg"
    },
    21: {
        id: 21,
        nombre: "Sauvignon Blanc Gran Reserva",
        descripcion: "Un Sauvignon Blanc con notas de frutas tropicales y un toque de madera.",
        descripcionExtendida: "El Sauvignon Blanc Gran Reserva es un vino que ofrece una experiencia única con su perfil aromático intensamente frutal y su complejidad resultante del envejecimiento en barrica. Cultivado en viñedos de clima fresco, este vino presenta notas de frutas tropicales, como piña y maracuyá, complementadas con un toque de madera que le confiere una profundidad adicional. La cosecha se realiza en el punto óptimo para preservar la frescura y la intensidad de los aromas, y el vino se envejece en barricas de roble durante 10 meses. Ideal para acompañar platos de mariscos, aves y comidas con salsas a base de crema, el Sauvignon Blanc Gran Reserva ofrece una experiencia de cata rica y elegante, reflejando la dedicación y la calidad en su elaboración.",
        precio: 25000,
        categoria: "Blanco",
        imagen: "./images/vinos/21.jpg"
    },
    22: {
        id: 22,
        nombre: "Rosado de Malbec",
        descripcion: "Un rosado fresco con notas de frutos rojos y flores.",
        descripcionExtendida: "Nuestro Rosado de Malbec es un vino que celebra la frescura y la vivacidad de la uva Malbec en una versión rosada. Procedente de viñedos de altitud, este vino presenta notas de frutos rojos frescos, como fresas y cerezas, con un delicado toque floral. La cosecha se realiza en el momento óptimo para preservar el carácter fresco y afrutado, y el vino se vinifica en tanques de acero inoxidable para mantener su vivacidad. Ideal para acompañar platos ligeros, ensaladas y tapas, el Rosado de Malbec es perfecto para disfrutar en días soleados y reuniones informales, ofreciendo una experiencia de cata fresca y alegre.",
        precio: 9500,
        categoria: "Rosado",
        imagen: "./images/vinos/22.jpg"
    },
    23: {
        id: 23,
        nombre: "Rosado de Syrah",
        descripcion: "Un rosado con notas de frutos rojos y un toque de especias.",
        descripcionExtendida: "El Rosado de Syrah es un vino que ofrece una combinación vibrante de sabores frutales y especiados en una versión rosada. Procedente de viñedos en regiones cálidas, este vino presenta notas de frutos rojos, como frambuesas y cerezas, con un sutil toque de especias y un matiz de flores. La cosecha se realiza con cuidado para preservar la frescura y el carácter del vino, y se vinifica en tanques de acero inoxidable. Ideal para acompañar platos ligeros, mariscos y tapas, el Rosado de Syrah es perfecto para disfrutar en cualquier ocasión, ofreciendo una experiencia de cata fresca y emocionante.",
        precio: 11000,
        categoria: "Rosado",
        imagen: "./images/vinos/23.jpg"
    },
    24: {
        id: 24,
        nombre: "Rosado de Pinot Noir",
        descripcion: "Un rosado elegante con notas de cerezas y un toque de flores.",
        descripcionExtendida: "Nuestro Rosado de Pinot Noir es un vino elegante que destaca por su frescura y sofisticación. Cultivado en viñedos de clima fresco, este vino presenta notas de cerezas frescas y un delicado toque de flores blancas. La cosecha se realiza en el momento óptimo para preservar la pureza y la intensidad de los aromas, y el vino se vinifica en tanques de acero inoxidable para mantener su frescura. Ideal para acompañar platos ligeros, ensaladas y aperitivos, el Rosado de Pinot Noir es perfecto para ocasiones elegantes y celebraciones, ofreciendo una experiencia de cata refinada y encantadora.",
        precio: 12500,
        categoria: "Rosado",
        imagen: "./images/vinos/24.jpg"
    }
};

