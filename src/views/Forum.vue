<template>
  <div class="container py-5">
    <NavTabs />
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";

const dummyData = {
  restaurants: [
    {
      id: 7,
      name: "Cleo Goldner",
      tel: "632-742-8599",
      address: "912 Betty Drive",
      opening_hours: "08:00",
      description: "Cumque dolorem similique eos rem itaque. Labore ni",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.7440319095808",
      viewCounts: 106,
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-03-01T16:16:18.000Z",
      CategoryId: 7,
      Category: {
        id: 7,
        name: "複合式料理",
        createdAt: "2021-02-27T15:02:08.000Z",
        updatedAt: "2021-02-27T15:02:08.000Z",
      },
      isFavorited: true,
      isLiked: false,
    },
    {
      id: 8,
      name: "Rosanna Green",
      tel: "(072) 972-1674",
      address: "694 Schroeder Spurs",
      opening_hours: "08:00",
      description: "Dolorem sunt aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=73.19112839887687",
      viewCounts: 122,
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-03-02T07:17:29.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-02-27T15:02:08.000Z",
        updatedAt: "2021-02-27T15:02:08.000Z",
      },
      isFavorited: true,
      isLiked: true,
    },
    {
      id: 11,
      name: "Naomi Waelchi II",
      tel: "1-714-339-7772",
      address: "77985 Consuelo Lakes",
      opening_hours: "08:00",
      description: "Facilis laboriosam ex. Debitis et dignissimos nobi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.50346536996708",
      viewCounts: 1,
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-03-01T06:52:36.000Z",
      CategoryId: 3,
      Category: null,
      isFavorited: true,
      isLiked: false,
    },
    {
      id: 12,
      name: "Destiny Koepp",
      tel: "1-357-682-4344 x1631",
      address: "5784 Tromp Squares",
      opening_hours: "08:00",
      description: "Nobis omnis ab. Ut quo excepturi. Praesentium veri",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.894450272533529",
      viewCounts: 12,
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-03-01T10:43:44.000Z",
      CategoryId: 2,
      Category: null,
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 13,
      name: "Miss Green Wisozk",
      tel: "(712) 442-4503",
      address: "718 Juvenal Streets",
      opening_hours: "08:00",
      description: "Corporis qui est commodi qui ad vel qui libero qua",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.78750520831242",
      viewCounts: 1,
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-03-01T07:20:07.000Z",
      CategoryId: 2,
      Category: null,
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 15,
      name: "Muriel Walsh",
      tel: "(214) 781-3837 x85801",
      address: "093 Rocky Landing",
      opening_hours: "08:00",
      description: "Dolore dolore consequatur sed. Sed nihil optio ex ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.697974541679242",
      viewCounts: 2,
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-03-01T11:17:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-02-27T15:02:08.000Z",
        updatedAt: "2021-02-27T15:02:08.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 17,
      name: "Linwood Rogahn",
      tel: "1-505-985-0541",
      address: "250 Grimes Island",
      opening_hours: "08:00",
      description: "Dolor ea laudantium cupiditate totam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.56369794854953",
      viewCounts: 1,
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-03-02T07:14:11.000Z",
      CategoryId: 2,
      Category: null,
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 18,
      name: "Adolphus Kemmer",
      tel: "1-942-133-1908 x466",
      address: "470 Bosco Estate",
      opening_hours: "08:00",
      description: "Sunt sed placeat laboriosam sapiente est et est su",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.644699787966196",
      viewCounts: 2,
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-02-28T18:29:05.000Z",
      CategoryId: 4,
      Category: null,
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 19,
      name: "Aliya Barton",
      tel: "(336) 513-3973 x57186",
      address: "850 Murray Passage",
      opening_hours: "08:00",
      description: "Consequatur aliquam mollitia eos natus quia. Qui s",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.47941414943367",
      viewCounts: 5,
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-03-01T10:46:07.000Z",
      CategoryId: 3,
      Category: null,
      isFavorited: false,
      isLiked: true,
    },
    {
      id: 21,
      name: "Omer Crooks",
      tel: "1-740-881-8572 x9444",
      address: "3016 Will Mission",
      opening_hours: "08:00",
      description: "dignissimos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.344300080417067",
      viewCounts: 5,
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-03-01T03:37:15.000Z",
      CategoryId: 4,
      Category: null,
      isFavorited: true,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 5,
      name: "素食料理",
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-02-27T15:02:08.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-02-27T15:02:08.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2021-02-27T15:02:08.000Z",
      updatedAt: "2021-02-27T15:02:08.000Z",
    },
    {
      id: 17,
      name: "韓式料理",
      createdAt: "2021-02-28T05:49:43.000Z",
      updatedAt: "2021-02-28T05:49:43.000Z",
    },
    {
      id: 27,
      name: "法式料理",
      createdAt: "2021-02-28T05:51:09.000Z",
      updatedAt: "2021-02-28T05:51:09.000Z",
    },
    {
      id: 247,
      name: "台灣料理",
      createdAt: "2021-02-28T16:16:44.000Z",
      updatedAt: "2021-02-28T16:16:44.000Z",
    },
    {
      id: 257,
      name: "日式料理",
      createdAt: "2021-02-28T16:17:44.000Z",
      updatedAt: "2021-03-02T07:11:20.000Z",
    },
    {
      id: 367,
      name: "西班牙料理",
      createdAt: "2021-03-02T07:10:54.000Z",
      updatedAt: "2021-03-02T07:10:54.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  name: "Forum",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
    },
  },
};
</script>