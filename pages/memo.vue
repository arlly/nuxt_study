<template>
  <section class="contanier">
    <h1>Memo</h1>
    <table>
      <tr>
        <th>Title</th>
        <td>
          <input type="text" name="title" class="title" size="40">
          <button></button>
        </td>
      </tr>
      <tr>

        <th>Memo</th>
        <td>
          <textarea name="content" class="content" cols="50" rows="5"></textarea>
        </td>
      </tr>
      <tr>
        <th>
        </th>
        <td>
          <button>Save</button>
          <transition name="del">
            <button>delete</button>
          </transition>
        </td>
      </tr>
    </table>
    <hr>

    <ul class="list">
      <li></li>
    </ul>

    <hr>

    <div class="nav">
    </div>

  </section>
</template>

<script>
  export default {
    name: "memo",
    data: function () {
      return {
        title: '',
        content: '',
        num_per_page: '',
        find_flag: false,
        sel_flag: false,
      };
    },

    computed: {
      memo: function () {
        return this.$store.state.memo.memo;
      },
      page_items: function () {
        if (this.find_flag) {
          var arr = [];
          var data = this.$store.state.memo.memo;
          data.forEach(element => {
              if (element.title.toLowerCase().indexOf(this.title.toLowerCase()) >= 0) {
                arr.push(element);
              }
            }
          );
        } else if (this.sel_flag != false) {
          return [this.sel_flag];
        } else {
          return this.$store.state.memo.memo.slice(
            this.num_per_page * this.$store.state.memo.page,
            this.num_per_page * (this.$store.state.memo.page + 1)
          );
        }
      },
      page: {
        get: function () {
          return this.$store.state.memo.page;
        },
        set: function (p) {
          var pg = p > (this.$store.state.memo.memo.length - 1) / this.num_per_page ? Math.ceil((this.$store.state.memo.memo.length - 1) / this.num_per_page) : p;
          pg = pg < 0 ? 0 : pg;
          this.$store.commit('memo/set_page', pg);
        }
      },

    }
  }
</script>

<style scoped>

</style>
