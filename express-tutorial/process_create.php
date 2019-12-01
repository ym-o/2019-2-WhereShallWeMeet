<?php
$flag = hello;
echo '<script>alert("$flag");</script>';
$conn = mysqli_connect(
  'whereshallwemeet-db.cxotycrbhaji.ap-northeast-2.rds.amazonaws.com',
  'jisoo449',
  'rea!choc5',
  'testdb');
$sql = "
  INSERT INTO user1
    (Meeting,Dat,Attendees,place)
    VALUES(
      '{$_POST['meeting']}',
      '{$_POST['date']}',
      '{$_POST['attendees']}',
      '{$_POST['place']}'
      )
";
$result = mysqli_query($conn, $sql);
if($result === false){
  echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요';
  error_log(mysqli_error($conn));
} else {
  echo '성공했습니다.';
}
?>
