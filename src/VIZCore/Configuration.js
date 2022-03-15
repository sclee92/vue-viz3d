let Configuration = function (VIZCore) {
    let scope = this;
    this.AUTHORITY_PARAMS = {
        Data: 'http://127.0.0.1:8901'
    };
    this.Render = {
        // 화면 조작시 가시화 정보 조정
        Progressive: {
            Enable: true,
            // Rendering Objects Count
            LimitCount: 2000
        },

        // Object Cache
        Cache: {
            Enable: true,
            // Triangles Count
            LimitCount: 50000000
        },

        // Loading Priority
        // LOD, DISTANCE, SHUFFLE(LOD + DISTANCE)
        //Priority: VIZCore.Enum.RENDER_PRIORITY.DISTANCE,
        //Priority: VIZCore.Enum.RENDER_PRIORITY.LOD,
        Priority: VIZCore.Enum.RENDER_PRIORITY.SHUFFLE,

        // Download Thread Count
        // DEFAULT (1), High-Performance(1 < Value)
        DownloadThreadCount: 1,
    };

    this.Tree = {
        Visible: false
    };

    this.Model = {
        Selection: {

            Color: new VIZCore.Color(255, 0, 0, 255), // Selection Object Color

            // Body, Part, Assembly, LEVEL
            Unit: VIZCore.Enum.SELECT_UNIT.Body,
            //Unit: VIZCore.Enum.SELECT_UNIT.Part,
            //Unit: VIZCore.Enum.SELECT_UNIT.Assembly,
            //Unit: VIZCore.Enum.SELECT_UNIT.Level,
            
            Level: 3,

            // All, Opacity-Object
            Kind: VIZCore.Enum.SelectionObject3DTypes.ALL
            //Kind: VIZCore.Enum.SelectionObject3DTypes.OPAQUE_OBJECT3D
        }
    };

    this.Property = {
        NavigateToParentNode : true, //Search parent node properties.
    };

    this.Loader = {
        CompletedTime: VIZCore.Enum.CONFIG_KEY.LOADER.COMPLETEDTIME.STRUCTURE, // 완료 시점 이후 형상 로딩
    };
};

export default Configuration;