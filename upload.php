<?php
if(isset($_POST['submit'])){
    /* Get file properties */
    $file = $_FILES['file'];
    $filename = $_FILES['file']['name'];
    $fileTmpname = $_FILES['file']['tmp_name'];
    $fileSize = $_FILES['file']['size'];
    $fileError = $_FILES['file']['error'];
    $fileType = $_FILES['file']['type'];

    /*split up file name*/
    $fileExt = explode('.', $fileName);
    $fileActualExt = strolower(end($fileExt));

    /*limit files allowed*/  
    $allow = array('jpg','jpeg','png');
    if(in_array($fileActualExt, $allowed)){
        if($fileError === 0){
            if($fileSize < 100000){
                /*set file name and destination*/
                $fileNameNew = uniqid('',true)."."$fileActualExt;
                $fileDestination = 'uploads/'.$fileNameNew;
                move_uploaded_file($fileTmpname.$fileDestination);
            }
            else{
                echo "your file is too big";
            }
        }
        else{
            echo "Error in file";
        }
    }
    else{
        echo "you cannot upload the file";
    }
}
?>
