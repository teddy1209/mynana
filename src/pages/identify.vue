<template>
    <div class="identify">
        <div class="upload-box">
            <div class="uploadText">
                <p>上传狗狗照片</p>
                <p>请上传正面全身照、侧面全身照、以及面部照片</p>
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
            <el-button size="small" type="success" class="submit-button" @click="submitUpload">识别</el-button>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </div>
        
        <div class="dog-image">
            <span class="resultText">检测结果:</span>
            <el-image style="width: 200px; height: 200px" :src="dogImage" fit="fill"></el-image>
            <span class="demonstration">{{ dogVariety }}</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            dogVariety: '西伯利亚金毛巡回小猎犬',
            dogImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-agfiZOFWYMEL0EkWaioeJqo95Jp4adHucwQnCM5S3gJzFKrQw'
        };
    },
    methods:{
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
        identify(){
            this.dogVariety = "西伯利亚金毛巡回小猎犬";
            this.dogImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-agfiZOFWYMEL0EkWaioeJqo95Jp4adHucwQnCM5S3gJzFKrQw"
        }
    }
};
</script>

<style scoped>
.identify{
    min-height: 300px;
    background-color:#f4f4f4;
    overflow: hidden;
    padding: 10% 10%;
}
.upload-box{
    width: 70%;
    float: left;
}
.dog-image{
    width: 30%;
    height: 100%;
    float: right;
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
.resultText{
    display: block;
    margin-bottom: 20px;
    margin-top: 20px;
    color: #8b8687;
}
.demonstration{
    display: block;
    margin-top: 20px;
    color: #8b8687;
}
</style>
