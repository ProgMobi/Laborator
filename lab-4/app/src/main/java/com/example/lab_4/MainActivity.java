package com.example.lab_4;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
	@SuppressLint("SetTextI18n")
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		Button addButton = findViewById(R.id.addButton);
		Button subButton = findViewById(R.id.subtractButton);
		Button mulButton = findViewById(R.id.multiplyButton);
		Button divButton = findViewById(R.id.divideButton);
		Button powButton = findViewById(R.id.powerButton);
		EditText firstEditText = findViewById(R.id.firstEditText);
		EditText secondEditText = findViewById(R.id.secondEditText);
		TextView result = findViewById(R.id.result);

		addButton.setOnClickListener(view -> {
			int num1 = Integer.parseInt(firstEditText.getText().toString());
			int num2 = Integer.parseInt(secondEditText.getText().toString());
			result.setText(Integer.toString(num1 + num2));
		});

		subButton.setOnClickListener(view -> {
			int num1 = Integer.parseInt(firstEditText.getText().toString());
			int num2 = Integer.parseInt(secondEditText.getText().toString());
			result.setText(Integer.toString(num1 - num2));
		});

		mulButton.setOnClickListener(view -> {
			int num1 = Integer.parseInt(firstEditText.getText().toString());
			int num2 = Integer.parseInt(secondEditText.getText().toString());
			result.setText(Integer.toString(num1 * num2));
		});

		divButton.setOnClickListener(view -> {
			int num1 = Integer.parseInt(firstEditText.getText().toString());
			int num2 = Integer.parseInt(secondEditText.getText().toString());
			if (num1 == 0) {
				result.setText("Error");
			} else {
				result.setText(Integer.toString(num1 / num2));
			}
		});

		powButton.setOnClickListener(view -> {
			int num1 = Integer.parseInt(firstEditText.getText().toString());
			int num2 = Integer.parseInt(secondEditText.getText().toString());
			result.setText(Integer.toString((int) Math.pow(num1, num2)));
		});
	}
}