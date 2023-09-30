import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/project"

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(projectAdded({ name: "Project 1"} ))

store.dispatch(bugAdded({ description: "Bug 1"}));
store.dispatch(bugAdded({ description: "Bug 2"}));
store.dispatch(bugAdded({ description: "Bug 3"}));

store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 1 }));

console.log(store.getState());