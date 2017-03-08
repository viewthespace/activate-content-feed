const AWS_BUCKET = 'mona-production';

export default function getMediaUrl(media) {
  if (!media || !media._id) {
    //TODO: default to a place holder image?
    return '';
  }
  
  return `https://${AWS_BUCKET}.s3.amazonaws.com/${media._id}.image`;
};
