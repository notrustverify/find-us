# Find Us!

Did you spotted one of our sticker? Drop us a mail, we might have something for you! ;)

## Picture upload
To upload a picture of a sticker, you'll need: a picture of the sticker and the GPS coordinates of the location where you took the picture.

Make sure to remove the metadata on your picture before uploading it! You can find how to do it by searching online (or [here](https://www.comparitech.com/blog/information-security/remove-metadata-from-photos/)).


### Easiest way
Click [here](https://github.com/notrustverify/find-us/issues/new?template=new_image.yml) and fill in the form! We'll check your submission ASAP!


### Proper way:

1. Fork this repository

2. Determine the id your picture will have by counting the number of images in the _images_ folder. The number of images is your `id` 

3. Rename your image with it's `id` (to have something like "17.jpeg" or "17.png") and add your image in the _images_ folder.

4. Open the _images.json_ file and add the following block in the list:

   ```json
   {
    	"id": <your-id>
       "lat": <the-latitude-of-your-location>
       "long": <the-longitude-of-your-location>
       "name": "<the-name-of-your-image>"
   }
   ```

   To not forget to add a coma ('`,`') before the bloc you are inserting to ensure the JSON is in the correct format!

5. Do a pull request on our repository! We'll check it ASAP
