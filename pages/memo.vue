<template>
  <section class="contanier">
    <h1>Memo</h1>
    <table>
      <tr>
        <th>Title</th>
        <td>
          <input type="text" name="title" class="title" size="40" v-model="title" @focus="set_flag">
          <button @click="find">find</button>
        </td>
      </tr>
      <tr>

        <th>Memo</th>
        <td>
          <textarea name="content" class="content" cols="50" rows="5" v-model="content"></textarea>
        </td>
      </tr>
      <tr>
        <th>
        </th>
        <td>
          <button @click="insert">Save</button>
          <transition name="del">
            <button v-if="sel_flag != false" @click="remove">delete</button>
          </transition>
        </td>
      </tr>
    </table>
    <hr>

    <ul class="list">
      <li v-for="item in page_items">
        <span @click="select(item)">{{ item.title}}</span>
      </li>
    </ul>

    <hr>

    <div class="nav">
      <span @click="prev">&lt;prev</span>
      <span @click="next">next&gt;</span>
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
        num_per_page: 7,
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
    },

    methods: {
      set_flag: function () {
        if (this.find_flag || this.sel_flag != false) {
          this.find_flag = false;
          this.sel_flag = false;
          this.title = '';
          this.content = '';
        }
      },

      select: function(item) {
        this.find_flag = false;
        this.sel_flag = item;
        this.title = item.title;
        this.content = item.content;
      },

      insert: function () {
        this.$store.commit('memo/insert', {title:this.title, content:this.content});
        this.title = '';
        this.content = '';
      },

      remove: function () {
        if (this.sel_flag == false) {
          return ;
        } else {
          this.$store.commit('memo/remove', this.sel_flag);
          this.set_flag();
        }
      },

      find: function() {
        this.sel_flag = false;
        this.find_flag = true;
      },

      next: function () {
        this.page++;
      },

      prev: function () {
        this.page--;
      }
    },

    created: function () {
      this.$store.commit('memo/set_page', 0);
    }
  }
</script>

<style scoped>

</style>
