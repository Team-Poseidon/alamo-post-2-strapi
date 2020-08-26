module.exports = ({ env }) => ({
    upload: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKEY: env('AWS_ACCESS_SECRET'),
            region: 'aws-region',
            params: {
                Bucket: 'alamo-post-2-strapi-aws-s3'
            }
        }
    }

})