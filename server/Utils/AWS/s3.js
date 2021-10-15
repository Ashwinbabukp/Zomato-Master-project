import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAQBLVYJ5YK5UGMIMY",
  secretAccessKey: "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",
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};