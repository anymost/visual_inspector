import Vue from 'vue';
import App from './Vue/App';

import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import {Button, Select, RadioGroup, Radio, Input} from 'iview';


// [Button, Select, RadioGroup, Radio, Input].forEach(comp => {
//     Vue.component(comp.name, comp);
// })

Vue.use(iView);

const app = function () {
	let vm, 
		uiCreated = false,
		appState = 'stopped';
	return {
		init() {
			chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
                if (request.type === 'insertImg') {
                    this.run(request.payload);
				}
			    return true;
		    });
		},

		getImgSrc(dataUrl) {
            let blobObj = this.dataURLtoBlob(dataUrl);
            return URL.createObjectURL(blobObj);
		},

        dataURLtoBlob(dataUrl) {
            let arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) u8arr[n] = bstr.charCodeAt(n);
            return new Blob([u8arr], {type: mime});
        },

		run({dataUrl}) {
			let src = this.getImgSrc(dataUrl);
            if (vm) {
                vm.src = src;
			} else {
                let rootEl = document.createElement('div')
                document.body.appendChild(rootEl);
                this.createUI(src).$mount(rootEl);
			}
		},

		quit() {
			if (appState === 'running') vm.$destroy();
		},

		createUI(src) {
			if (!uiCreated) {
				vm = new Vue({
				    // render: h => h(App),
					data: { src },
					template: ` <App :src = "src" /> `,
				    destroyed() {
				    	uiCreated = false;
						appState = 'stopped';
						vm.$el.remove();
				    },
				    created() {
				    	uiCreated = true;
						appState = 'running';
				    },
					components: {App}
				});
			}

			return vm;
		}
	}
}();

app.init();

