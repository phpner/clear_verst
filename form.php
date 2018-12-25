<form data-effect="mfp-zoom-in" method="post" action="/message.php" class="white-popup zoom-anim-dialog mfp-hide form" id="form">
    <h2>заказать звонок</h2>

    <input id="name" type="text" name="name" placeholder="ИМЯ">

    <input id="tel" type="text" name="tel" placeholder="телефон">

    <input id="email" type="text" name="email" placeholder="почта">

    <div class="form_grop">
        <input name="checkboxb" type="checkbox" id="checkbox" >
        <label for="checkbox"></label>
        <span onclick="$('#checkbox').trigger('click');">Я согласен на передачу и обработку  персональных <br>
            данных, а также на получение  информации обо мне</span>
        <input type="submit" class="btn" value="заказать звонок">
    </div>
</form>