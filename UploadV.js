app.post('/videos/new', function(req, res) {
  req.form.complete(function(err, fields, files) {
    console.log('here i go');
    if(err) {
      next(err);
    } else {
      ins = fs.createReadStream(files.file.path);
      console.log('insssssssssssss'+ins);
      ous = fs.createWriteStream(__dirname + '/static/uploads/videos/' + files.file.filename);
      util.pump(ins, ous, function(err) {
        if(err) {
          next(err);
        } else { RegProvider.save({
           file: req.param(files.file.filename),
                   filename: req.param('filename')
                 }, function(error, docs) {
              res.redirect('/videos');
         });
        }
      });
      //console.log('\nUploaded %s to %s', files.file.filename, files.file.path);
      //res.send('Uploaded ' + files.file.filename + ' to ' + files.file.path);
    }
  });
});