<template>
  <form class="searchBoxForm" role="form">
    <div class="row">
      <div class="col-xs-2">
        <div class="input-group">
          <input type="text" class="form-control" />
          <div class="input-group-btn">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
              下拉菜单
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu pull-right">
              <li>
                <a href="#">功能</a>
              </li>
              <li>
                <a href="#">另一个功能</a>
              </li>
              <li>
                <a href="#">其他</a>
              </li>
            </ul>
          </div>
          <!-- /btn-group -->
        </div>
        <!-- /input-group -->
      </div>
      <!-- /.col-lg-6 -->
      <div class="diver"></div>
      <div class="col-xs-2">
        <div class="input-group">
          <input type="text" class="form-control" />
          <div class="input-group-btn">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
              下拉菜单
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu pull-right">
              <li>
                <a href="#">功能</a>
              </li>
              <li>
                <a href="#">另一个功能</a>
              </li>
              <li>
                <a href="#">其他</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
<div class="diver"></div>
      <div class="col-xs-2">
        <div class="input-group">
          <input type="text" class="form-control" />
        </div>
      </div>
<div class="diver"></div>
      <div class="col-xs-2">
        <div class="input-group">
          <button type="button" class="btn btn-default">搜索</button>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </form>
</template>

<script>
export default {
  name: 'serachBox'
}
</script>

<style>
.searchBoxForm{
  border: 1px solid black;
}
</style>
