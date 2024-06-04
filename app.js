document.getElementById('colorPicker').addEventListener('change', function() {
    const color = this.value;
    document.getElementById('colorDisplay').style.backgroundColor = color;
});
