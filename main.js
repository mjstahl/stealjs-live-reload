import $ from "jquery";
import helloTemplate from "./hello.stache!";
import reload from "live-reload"

function render() {
	$("#app").html(helloTemplate({ name: "World!" }));
}

reload(render());