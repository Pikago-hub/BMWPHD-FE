<template>
    <v-main>
     

    </v-main> 

  
</template>
  
<script>
  import {useRouter} from 'vue-router'
  const router = useRouter()


  export default { 
    name: 'History',
    data: () => ({
      drawer: false,
      group: null,
      searchTerm: "",
      categories: [
        "Name",
        "sire",
        "dam",
        "dam sire",
        "2nd dam",
        "lte",
        "pe",
        "show",
        "class",
        "level",
        "open vs non pro",
        "age",
        "place",
        "money",
        "breeder",
        "owner",
        "rider",
        "draw",
        "back number",
        "on dirt",
        "finalist",
        "maneuver scores",
        "notes",
        "nrha",
        "date of show/class",
        "schooling"
      ],
      categoriesCopy: [],
      selectedCategories: []
    }),

  mounted() {
    this.categoriesCopy = [...this.categories];
  },

  computed: {},

  methods: {
    searchCategories(e) {
      if (!this.searchTerm) {
        this.categories = this.categoriesCopy;
      }

      this.categories = this.categoriesCopy.filter((category) => {
        return category.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    },
    onHome(){
        this.$router.push('/home');
    }, 
    goToResult(){
        this.$router.push('/result');
    },
    onManage(){
        this.$router.push('/home');
    }, 
    onHistory(){
        this.$router.push('/history');
    }, 
    onLogin() {
      this.$router.push('/login');
    }, 
    onAbout() {
          this.$router.push('/about');
      },
  }
}
</script>