var im = function(im) {

    im.shuffle = function(array) {
        if (array == null) return;
        var i = array.length, j, temp;
        if (i == 0) return array;
        while(--i) {
            j = Math.floor(Math.random()*(i+1));
            temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
        return array;
    };
    return im;
}(im || {});
