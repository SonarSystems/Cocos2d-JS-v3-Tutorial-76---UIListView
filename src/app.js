var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);

        var listView = new ccui.ListView();
        listView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        listView.setTouchEnabled(true);
        listView.setBounceEnabled(true);
        listView.setBackGroundImage(res.HelloWorld_png);
        listView.setContentSize(cc.size(1280, 100));
        listView.setAnchorPoint(cc.p(0.5, 0.5));
        listView.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(listView);

        for ( var i = 0; i < 50; i++ )
        {
            var button = new ccui.Button();
            button.setName("TextButton");
            button.setTouchEnabled(true);
            button.loadTextures(res.CloseNormal_png, res.CloseSelected_png, "");
            listView.pushBackCustomItem(button);
        }

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

