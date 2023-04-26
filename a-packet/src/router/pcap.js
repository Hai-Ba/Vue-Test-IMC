const pcap = [
    {
        path: '/pcaps',
        component: () => import('../views/ViewPcap.vue'),
        meta: {
            title: '📜 Online pcap files viewer for analyze HTTP, DNS, other network traffic',
            transition: 'slide-left'
        },
        
    }
]

export default pcap;