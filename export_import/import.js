import somar from "./export.js"; //exportação padrão, isso geralmente é usado quando um módulo exporta principalmente uma única função
console.log(somar(3, 5))

import {sub} from "./export.js"//importação de uma função do outro arquivo
console.log(sub(10, 5))


//É importante observar que, para usar módulos ES6 no navegador, você precisa especificar o type`as` modulena sua scripttag:

//<script type="module" src="app.js"></script>
