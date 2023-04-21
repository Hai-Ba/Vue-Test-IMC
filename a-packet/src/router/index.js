import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import FeatureView from '../views/FeatureView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: FeatureView,
      meta: {
        title: '🔍 Online PCAP file analyzer designed to visualize HTTP 🌐, Telnet, FTP',
        transition: 'slide-left'
      }
    },
    {
      path: '/faq',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FaqView.vue'),
      meta: {
        title: '❓ A-Packets | FAQ',
        transition: 'slide-left'
      }
    },
    {
      path: '/upload',
      component: () => import('../views/UploadView.vue'),
      meta: {
        title: '🔄 Upload pcap file to analyze and view HTTP, FTP, Telnet, DNS, WiFi',
        transition: 'slide-left'
      }
    },
    {
      path: '/api',
      component: () => import('../views/ApiView.vue'),
      meta: {
        title: '⚙️ A-Packets | API REST Key usage',
        transition: 'slide-left'
      }
    },
    {
      path: '/price',
      component: () => import('../views/PriceView.vue'),
      meta: {
        title: '💳 A-Packets - Choose a plan to upload and analyze HTTP, FTP, Telnet, DNS',
        transition: 'slide-left'
      }
    },
    {
      path: '/pcaps',
      component: () => import('../views/ViewPcap.vue'),
      meta: {
        title: '📜 Online pcap files viewer for analyze HTTP, DNS, other network traffic',
        transition: 'slide-left'
      }
    },
    {
      path: '/signin',
      component: () => import('../views/SignIn.vue'),
      meta: {
        title: '🔍 Sign In to A-Packets',
        transition: 'slide-left'
      }
    },
  ]
})
// ... 

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

// ...
export default router
