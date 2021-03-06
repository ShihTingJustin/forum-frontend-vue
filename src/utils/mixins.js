import moment from "moment";

export const fromNowFilter = {
  filters: {
    fromNow(dataTime) {
      if (!dataTime) return '-'
      return moment(dataTime).fromNow()
    }
  }
}