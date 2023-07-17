import { Observable } from "../observable/observable.state.service";

class DrawerStateService {
    readonly isOpen = new Observable<boolean>(false);

    toggleDrawer = () => {
        this.isOpen.set(!this.isOpen.get())
    }
}

export const drawerStateService = new DrawerStateService();