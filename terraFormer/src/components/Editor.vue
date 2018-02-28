<template>
  <div>
    <img src="https://www.nature.com/polopoly_fs/7.44819.1498125747!/image/WEB-GettyImages-685026469.jpg_gen/derivatives/landscape_630/WEB-GettyImages-685026469.jpg" alt="placeholder for image">
    <form action="">
        <div class="form-group">
            <label class="col-form-label" for="inputDefault">Your Planet's Name</label>
            <input class="form-control" placeholder="Default input" id="inputDefault" type="text">
        </div>
        <div class="form-group">
            <select class="custom-select">
                <option selected="">Choose water percentage</option>
                <option value="10">Ten</option>
                <option value="20">Twenty</option>
                <option value="30">Thirty</option>
                <option value="40">Forty</option>
                <option value="50">Fifty</option>
                <option value="60">Sixty</option>
                <option value="70">Seventy</option>
                <option value="80">Eighty</option>
                <option value="90">Ninety</option>
            </select>
        </div>
        <div class="form-group">
            <select class="custom-select">
                <option selected="">Choose water color</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Indigo">Indigo</option>
                <option value="Violet">Violet</option>
                <option value="Seagreen">Seagreen</option>
                <option value="Mauve">Mauve</option>
                <option value="Aqua">Aqua</option>
                <option value="Cornflowerblue">Cornflowerblue</option>
            </select>
        </div>
                <div class="form-group">
            <select class="custom-select">
                <option selected="">Choose land color</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Indigo">Indigo</option>
                <option value="Violet">Violet</option>
                <option value="Seagreen">Seagreen</option>
                <option value="Mauve">Mauve</option>
                <option value="Aqua">Aqua</option>
                <option value="Cornflowerblue">Cornflowerblue</option>
            </select>
        </div>
        <div class="form-group">
            <label class="custom-file">
            <input id="file2" class="custom-file-input" type="file">
            <span class="custom-file-control"></span>
            </label>
        </div>
        <div class="custom-control custom-checkbox">
            <input class="custom-control-input" id="customCheck1" checked="" type="checkbox">
            <label class="custom-control-label" for="customCheck1">Mountains</label>
        </div>
        <div class="custom-control custom-checkbox">
            <input class="custom-control-input" id="customCheck1" checked="" type="checkbox">
            <label class="custom-control-label" for="customCheck1">Trees</label>
        </div>
        <div class="custom-control custom-checkbox">
            <input class="custom-control-input" id="customCheck1" checked="" type="checkbox">
            <label class="custom-control-label" for="customCheck1">Wind</label>
        </div>
        <div class="custom-control custom-checkbox">
            <input class="custom-control-input" id="customCheck1" checked="" type="checkbox">
            <label class="custom-control-label" for="customCheck1">Hurricanes</label>
        </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Editor"
};
</script>

