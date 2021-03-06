<template>
  <div class="container py-5">
    <RestaurantDetail :initial-restaurant="restaurant"/>
    <RestaurantComments :restaurant-comments="restaurantComments" />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";

const dummyData = {
  restaurant: {
    id: 1,
    name: "Judy Runte",
    tel: "(918) 827-1962",
    address: "98138 Elisa Road",
    opening_hours: "08:00",
    description: "dicta et cupiditate",
    image: "https://loremflickr.com/320/240/food,dessert,restaurant/?random=1",
    createdAt: "2019-06-22T09:00:43.000Z",
    updatedAt: "2019-06-22T09:00:43.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 3,
        text: "Quos asperiores in nostrum cupiditate excepturi aspernatur.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-06-22T09:00:43.000Z",
        updatedAt: "2019-06-22T09:00:43.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",
          image: "https://i.imgur.com/XooCt5K.png",
          isAdmin: false,
          createdAt: "2019-06-22T09:00:43.000Z",
          updatedAt: "2019-06-23T01:16:31.000Z",
        },
      },
      {
        id: 3,
        text: "Quos asperiores in nostrum cupiditate excepturi aspernatur.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-06-22T09:00:43.000Z",
        updatedAt: "2019-06-22T09:00:43.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",
          image: "https://i.imgur.com/XooCt5K.png",
          isAdmin: false,
          createdAt: "2019-06-22T09:00:43.000Z",
          updatedAt: "2019-06-23T01:16:31.000Z",
        },
      }
    ],
  },
  isFavorited: false,
  isLiked: false,
};

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        opening_hours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      const { restaurant, isFavorited, isLiked } = dummyData;
      const {
        id,
        name,
        Category,
        image,
        opening_hours: openingHours,
        tel,
        address,
        description,
        Comments,
      } = restaurant;

      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      };

      this.restaurantComments = Comments;

      console.log("id:", restaurantId);
    }
  },
};
</script>

