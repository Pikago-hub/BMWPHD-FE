import dynamicRoutes from './dynamicRoutes';
import useUserStore from '../store/index';
import authService from '../services/auth.service';
import authHeader from '../services/auth-header';
import userService from '../services/user.service';

// this function is used to filter out views defined in dynamicRoutes that a user does not have access to
function autoloadDynamicRoutes(router) {
  const userStore = useUserStore();
  var user = cacheUtils.get("user_info");
  console.log('this is the user ' + user.userInfo.role);
  const userPermissions = user.userInfo.role
  // filter dynamicRoutes based on user's permissions and add to router
  if (userPermissions) {
    dynamicRoutes.forEach((route) => {
      
      if (route.meta.permissions?.every((p) => {
      
      console.log(p) 
        return userPermissions === p
      })) {
        console.log(router.getRoutes())
        router.addRoute('Home', route)
        //router.addRoute({ path: '/DirectorReqManagement', component: () => import('@/views/DirectorReqMngmt.vue') });
        //console.log(router.getRoutes())
        // add view as a child of main layout
        //router.addRoute('Dashboard', route);
      }

    });
  }
}

export default autoloadDynamicRoutes;
