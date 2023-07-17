import { useObservable } from '../observable/observable.state.hook';
import { drawerStateService } from '../services/drawer.state.service';

export const useDrawer = () => {
  return {
    isOpen: useObservable(drawerStateService.isOpen),
    toggleDrawer: drawerStateService.toggleDrawer,
  };
};
