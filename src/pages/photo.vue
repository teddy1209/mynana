<template>
    <div class="photo">
        <div class="upload-box">
            <div class="uploadText">
                <p>上传狗狗照片</p>
            </div>
            <el-upload ref="upload" action="#" list-type="picture-card" multiple :limit='3' :on-exceed="handleOnExceed" :on-success="uploadSuccess" :on-error="uploadFail" :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                    <span class="el-upload-list__item-actions">
                        <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                            <i class="el-icon-zoom-in"></i>
                        </span>
                        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                            <i class="el-icon-download"></i>
                        </span>
                        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                            <i class="el-icon-delete"></i>
                        </span>
                    </span>
                </div>
            </el-upload>
            <el-button size="small" type="success" class="submit-button" @click="submitUpload">上传</el-button>
        </div>
        <div class="dogImgs">
            <div class="dogImgs-title">狗狗相册</div>
            <div class="demo-image__lazy" v-for="(date,index) in dates" :key="index">
                <span class="dateText">{{date.date | timeFormat}}</span>
                <el-image v-for="img in date.imgs" :key="img" :src="img" :preview-src-list="date.imgs"></el-image>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            dates:[]
        };
    },
    filters: {
        timeFormat: function (format) {
            format = new Date(parseInt(format));
            let Y = format.getFullYear() + '-';
            let M = (format.getMonth()+1 < 10 ? '0'+(format.getMonth()+1) : format.getMonth()+1) + '-';
            let D = format.getDate() + ' ';
            let h = format.getHours() + ':';
            let m = format.getMinutes() + ':';
            let s = format.getSeconds();
            return Y+M+D+h+m+s;
        }
    },
    created(){
        this.getDogImgs();
    },
    methods: {
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },
        handleOnExceed(){
            alert('最多上传三张图片')
        },
        submitUpload(){
            this.$refs.upload.submit();
        },
        uploadSuccess(){
            alert('图片上传成功');
            this.identify();
        },
        uploadFail(){
            alert('图片上传失败')
        },
        getDogImgs(){
            let data = [
                {
                    date: '1555747484000',
                    imgs: [
                        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'
                    ]
                },{
                    date: '1562400284000',
                    imgs:[
                        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'
                    ]
                },{
                    date: '1568966722000',
                    imgs:[
                        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                    ]
                }
            ];
            this.dates = data;
        }
    }
};
</script>

<style scoped>
.photo{
    min-height: 500px;
    background-color:#f4f4f4;
}
.dogImgs{
    width: 100%;
    margin-top: 20px;
    padding: 30px 30px;
}
.dogImgs-title{
    display: block;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    color: #DE7E73;
    margin-bottom: 30px;
}
.dateText{
    display: block;
    color: #8b8687;
    margin-bottom:20px;
    margin-top: 20px;
}
.upload-box{
    width: 100%;
    padding: 20px 10% 20px 10%;
}
.uploadText{
    margin-bottom: 30px;
    margin-left: 10px;
    color: #000000;
}
.submit-button{
    margin: 30px 0 0 10px;
    width: 100px;
    height: 40px;
    font-size: 14px;
}
.el-image{
    width: 300px;
    height: 200px;
    margin-right: 10px;
}
</style>
